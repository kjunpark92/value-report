import { temp_commercialAddresses, temp_commercialDetails } from './apis'

import {EventBus} from '@/vars'
export const state = () => {
  return {
    queriedAddress: '',
    addressResults: [],
    buildingDetails: {
      address: {
        address_dong: '',
        address_road: '',
        building_name: '',
        gu_code: '',
        dong_code: '',
        land_type_code: '',
        bun: '',
        ji: '',
        road_code: '',
        new_bun: '',
        new_ji: ''
      },
      property: {
        base_area: '',
        total_area: '',
        structure_name: '',
        structure_others: '',
        main_use_name: '',
        main_use_others: '',
        roof_name: '',
        roof_name_others: '',
        height: '',
        aboveground: '',
        underground: '',
        passender_elevator: '',
        emergency_elevator: '',
        constuction_authorized_date: '',
        construction_complete_date: '',
        use_confirmed_date: '',
        area_usage: '',
        land_area: '',
        land_price_per_sqm: '',
        land_price: '',
        construction_year: ''
      },
      price: {
        location_score: '',
        growth: '',
        est_price_sqm: '',
        est_price: ''
      },
      location: {
        coordinates: [
          127.07875564605607,
          37.49939478072101      
        ]
      }
    },
  }
}

export const mutations = {
  STORE_ADDRESS_RESULTS(state, payload) {
    state.addressResults = payload.data.results
  },
  STORE_BUILDING_DETAILS(state, payload) {
    state.buildingDetails = payload.data.results[0]
  },
  RESET_COM_DETAILS(state){
    state.addressResults = []
    state.buildingDetails.address = {
      address_dong: '',
      address_road: '',
      building_name: '',
      gu_code: '',
      dong_code: '',
      land_type_code: '',
      bun: '',
      ji: '',
      road_code: '',
      new_bun: '',
      new_ji: ''
    }
    state.buildingDetails.property = {
      base_area: '',
      total_area: '',
      structure_name: '',
      structure_others: '',
      main_use_name: '',
      main_use_others: '',
      roof_name: '',
      roof_name_others: '',
      height: '',
      aboveground: '',
      underground: '',
      passender_elevator: '',
      emergency_elevator: '',
      constuction_authorized_date: '',
      construction_complete_date: '',
      use_confirmed_date: '',
      area_usage: '',
      land_area: '',
      land_price_per_sqm: '',
      land_price: '',
      construction_year: ''
    }
    state.buildingDetails.price = {
      location_score: '',
      growth: '',
      est_price_sqm: '',
      est_price: ''
    }
    state.buildingDetails.location.coordinates = [
      127.07875564605607,
      37.49939478072101       
    ]
  },
  UPDATE_QUERIED_ADDRESS(state, payload){
    state.queriedAddress = payload;
    EventBus.$emit('updateComAddr', state.queriedAddress)
  }
}

export const actions = {
  // this val will hold the address searched from the input field from the commercial/SearchBar component
  commercialAddressLookup({ commit }, val) {
    // looking up address with lookup ep......can be swapped with juso.....(who knows)
    let key = localStorage.getItem('jwt')
    let config = {
      headers: {Authorization: `XaiToken ${key}`}
    }
    this.$axios.get(temp_commercialAddresses + val + '/', config)
      .then(addressOfBuildings => {
        commit('STORE_ADDRESS_RESULTS', addressOfBuildings)
      }).catch(err => {
        console.log(err)
      })
  },
  // this val will be the dong address given by lookup endpoint
  getCommercialDetails({ commit }, val) {
    // looking up details of building with dong address( can be switched to road later )
    let key = localStorage.getItem('jwt')
    let config = {
      headers: {Authorization: `XaiToken ${key}`}
    }
    this.$axios.get(temp_commercialDetails + val + '/', config)
      .then(async data => {
        // console.log(data)
        await commit('STORE_BUILDING_DETAILS', data)
        console.log(data.data.results[0].location.coordinates)
        await EventBus.$emit('commSearch', data.data.results[0].location.coordinates)
      }).catch(err => {
        console.log(err)
      })
  }

}

export const getters = {
  queriedAddress: state => state.queriedAddress,
  buildingAddresses: state => state.addressResults.map(addr =>  {
    return { dong: addr['address_dong'], road: addr['address_road'] }
  }),
  buildingDetails: state => state.buildingDetails,

}