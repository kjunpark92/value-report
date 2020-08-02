import {temp_commercialAddresses, temp_commercialDetails} from '../store/apis'

export const state = () => {
  return {
    commAddrs: 'checking...',
    jusoAddrs: 'checking...',
    ypDetails: 'checking...',
    commDetails: 'checking...'
  }
}

export const mutations = {
  setCommAddrs(state, payload){
    payload?state.commAddrs = 'online': state.commAddrs = 'offline'
  },
  setJusoAddrs(state, payload){
    payload?state.jusoAddrs = 'online': state.jusoAddrs = 'offline'
  },
  setYpDetails(state, payload){
    payload?state.ypDetails = 'online': state.ypDetails = 'offline'
  },
  setCommDetails(state, payload){
    payload?state.commDetails = 'online': state.commDetails = 'offline'
  },
  async CHECK_SERVERS(state, payload) {
    //test comm addr lookup
    let key = localStorage.getItem('jwt')
    let config = {
      headers: {Authorization: `XaiToken ${key}`}
    }
    console.log('checking servers...')
    await this.$axios.get(temp_commercialAddresses + '%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC/', config).then(data => {
      console.log('inside comm addrs...')  
      try{
          if (data.status == 200) {
            this.commit('serverStatusModule/setCommAddrs', true)
        }
        else{
          this.commit('serverStatusModule/setCommAddrs', false)
        }
      }
      catch {
        this.commit('serverStatusModule/setCommAddrs', false)
      }
    }).catch( err => {
      this.commit('serverStatusModule/setCommAddrs', false)
    })
    await this.$axios.get(temp_commercialDetails + '%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8C%80%EC%B9%98%EB%8F%99%2027-13%EB%B2%88%EC%A7%80/', config).then(data => {  
      try{
        if (data.status == 200) {
          this.commit('serverStatusModule/setCommDetails', true)
        }
      }catch{
        console.log('commercial details error')
        this.commit('serverStatusModule/setCommDetails', false)
      }
    }).catch(err=>{
      this.commit('serverStatusModule/setCommDetails', false)
    })

    await this.$axios.get('https://xai-dev.xyz/juso/addrLinkApi?keyword=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%EB%85%BC%ED%98%84%EB%8F%99+23-8').then(data => {
    //   console.log(data)  

    if (data.status == 200) {
      this.commit('serverStatusModule/setJusoAddrs', true)
    }  
    }).catch(err=>{
      this.commit('serverStatusModule/setJusoAddrs', false)
      jad = false;
    })

    // this.$axios.get('https://cors-anywhere.herokuapp.com/13.209.43.95:5000/get_units').then(data => {
    let params = {adm_code: "1168010800", bunji: "00230008"}
    await this.$axios.post('https://cors-anywhere.herokuapp.com/13.209.43.95:5000/get_units', params).then(data => {
      console.log(data.status)  
    if (data.status == 200) {
      this.commit('serverStatusModule/setYpDetails', true)
      }
    }).catch(err=>{
      this.commit('serverStatusModule/setYpDetails', false)
    })
  }
}

export const getters = {
  commAddrs: state => state.commAddrs,
  commDetails: state => state.commDetails,
  jusoAddrs: state => state.jusoAddrs,
  ypDetails: state => state.ypDetails,
}