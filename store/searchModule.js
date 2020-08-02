import { juso, jusoCoords, cors_yeonlipUnitsEP, geoCoder } from './apis'
import _ from 'lodash'
import { EventBus } from '@/vars'


const state = () => {
  return {
    queriedAddress: '서울특별시 강남구 논현동 23-8',
    jusoResults: [],
    selectedAddressDetails: {
      dong: '',
      road: '',
      unit: ''
    },
    chosenUnits: [],
    buildingFloors: [],
    unitsByFloor: [],
    buildingDongs:[],
    dongUnits:[],
    coordinates: {
    lat: '37.5384',
    long: '126.9654'
  }
  }
}

const actions = {
  getAddrsFromJuso({ commit }, val) {
    var jusoParams = {
      keyword: val.addr,
    }
    this.$axios.get(juso, {
      params: jusoParams
    }).then(res => {
      if (res.data.results.juso != null) {
        commit('STORE_JUSO_ADDRS', res.data.results.juso)
        const geoParams = {
          key:'f973646f6b16f3',
          q: val.addr,
          format: 'json'
        }
        this.$axios.get(geoCoder, {
          params: geoParams
        }).then(async res =>{
          var latLong = {
            lat: res.data[0].lat,
            long: res.data[0].lon
          }
          await commit('STORE_LAT_LONG', {
            coordinates: latLong
          })
          await EventBus.$emit("resSearch", latLong)
        })
        return false
      } else {
		  //throw an alert here
        commit('STORE_JUSO_ADDRS', [{ jibunAddr: 'Not Found', roadAddr: 'Search Again' }])
        return false
      }
    }).catch(err => console.log(err))
  },

  async getUnits({ commit }, val) {
    var success = true
    await this.$axios.post(cors_yeonlipUnitsEP, val, {
      crossdomain: true  
    })
      .then(data => {
		var parsedUnits = JSON.parse(JSON.stringify(data.data))
        if (parsedUnits.length === 0) {
          //insert a modal here
          alert("Cannot Find This Yeonlip")
          success = 'notfound'
        }
        //if there are multiple blocks ("dongs") associated with this address 
        else if (parsedUnits[0].block_name != null ) {
          var separatedDongs = {}
          parsedUnits.forEach(u => {
            if (!(u.block_name in separatedDongs)) {
              separatedDongs[u.block_name] = []
              separatedDongs[u.block_name].push(u)
            } else {
              separatedDongs[u.block_name].push(u)
            }
          })
          var buildingDongs = Object.keys(separatedDongs)
          var orderedDongs = buildingDongs.sort((a, b) => Number(a.split('동')[0]) - Number(b.split('동')[0])) 
      if(orderedDongs.length === 1){
        commit('STORE_UNITS_BY_FLOOR', parsedUnits)
        success = "apartment"
      } else {
        commit('STORE_BUILDING_DONGS', orderedDongs)
        commit('STORE_DONG_UNITS', separatedDongs)
        success = "block"
        //routes to SET_RES_BLOCK_VIEW in ResidentialAddresses which shows the components/ResidentialBlocks
      }
        } else {
          commit('STORE_UNITS_BY_FLOOR', parsedUnits)
          success = "apartment"
		      //routes to SET_RES_APARTMENT_VIEW in ResidentialAddresses which shows the components/ResidentialApartments

        }
      }).catch(err => {
        console.log(err)
      })
    return success
  },

  selectedDetails({ commit }, val) {
    commit('STORE_SELECTED_DETAILS', val)
  }
}

const mutations = {
  SAVE_ADDR_DETAILS(state, payload){
    state.selectedAddressDetails = payload;
  },
  STORE_LAT_LONG(state, payload){
    state.coordinates.lat = payload.lat;
    state.coordinates.long = payload.lon;
  },
  STORE_SELECTED(state, payload) {
    state.selectedAddressDetails = payload
  },
  STORE_JUSO_ADDRS(state, payload) {
    state.jusoResults = payload
  },
  RESET_SEARCH_MODULE(state){
    state.jusoResults=[]
    state.chosenUnits = []
    state.buildingFloors= []
    state.unitsByFloor= []
    state.selectedAddressDetails.dong = '',
    state.selectedAddressDetails.road = '',
    state.selectedAddressDetails.unit = ''
  },
  RESET_JUSO_ADDRS(state){
    state.jusoResults=[]
  },
  RESET_UNITS_AND_FLOORS(state) {
    state.chosenUnits = []
    state.buildingFloors= []
	state.unitsByFloor= []
	state.buildingDongs=[]
	state.dongUnits=[]
  },
  STORE_BUILDING_DONGS(state, payload) {
    state.buildingDongs = payload
  },
  STORE_DONG_UNITS(state, payload) {
    state.dongUnits = payload
  },
  STORE_UNITS_BY_FLOOR(state, payload) {
    var cleanFloorArr = []
    payload.forEach(u => {
      if (u.floor_type_code == 10) {
        u.floor_number_str = u.floor_number * -1
      }
      else if (u.floor_type_code != 20 && u.floor_type_code != 10) {
        u.floor_number_str = u.floor_number
      } else {
        u.floor_number_str = u.floor_number
      }
      cleanFloorArr.push(u)
    })

    var sortedArr = []
    cleanFloorArr.forEach(u => {
      sortedArr.push({
        floorNum: u.floor_number_str,
        units: []
      })
    })

    var seen = new Set()
    const filteredArr = sortedArr.filter(el => {
      const duplicate = seen.has(el.floorNum);
      seen.add(el.floorNum);
      return !duplicate;
    });

    var floorFor = []
    filteredArr.forEach(f => {
      cleanFloorArr.forEach(u => {
        if (f.floorNum == u.floor_number_str) f.units.push(u)
      })
      floorFor.push(f)
    })
    floorFor.forEach(f =>{
      f.units = f.units.sort((a, b) => (a.unit_name > b.unit_name)? 1: -1)
    })
    var ordered = _.orderBy(floorFor, ['floorNum'], ['desc'])
    state.unitsByFloor = ordered;
  },
  STORE_CHOSEN_UNITS(state, payload) {
    var underground = []
    var aboveground = []
    var rooftop = []
    payload.forEach(u => {
      // change floor_code to floor_name later******************
      if (u.floor_type_name == "지상") aboveground.push(u)
      else if (u.floor_type_name == "지하") underground.push(u)
      else rooftop.push(u)
    })
    var numberPattern = /\d+/g;
    var orderedUnder = underground.sort((a, b) => Number(a.unit_name.match(numberPattern)) - Number(b.unit_name.match(numberPattern)))
    var orderedAbove = aboveground.sort((a, b) => Number(b.unit_name.match(numberPattern)) - Number(a.unit_name.match(numberPattern)))
    var orderedRooftop = rooftop.sort((a, b) => Number(b.unit_name.match(numberPattern)) - Number(a.unit_name.match(numberPattern)))
    // var sortedHos = orderedUnder.concat(orderedAbove).concat(orderedRooftop)
    var sortedHos = orderedRooftop.concat(orderedAbove).concat(orderedUnder)
    state.chosenUnits = sortedHos
  },
  UPDATE_QUERIED_ADDRESS(state, payload){
    state.queriedAddress = payload;
    EventBus.$emit('updateResAddr', state.queriedAddress)
  }
}

const getters = {
  queriedAddress: state => state.queriedAddress,
  jusoRes: state => state.jusoResults,
  jusoResLength: state => state.jusoResults.length,
  selected: state => {
    state.selectedAddressDetails;
  },
  engAddr: state => state.selectedAddressDetails.eng,
  sortedApts: state => state.chosenUnits,
  buildingFloors: state => state.buildingFloors,
  unitsByFloor: state => state.unitsByFloor,
  buildingBlocks: state => state.buildingDongs,
  dongUnits: state => state.dongUnits,
  selectedLatLong: state => {
    return state.coordinates
  },
  getLat: state => {
    return state.coordinates.lat
  },
  getLong: state => {
    return state.coordinates.long
  },
  unit: state => {
    return state.selectedAddressDetails.unit
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}