<template>
  <div
    :id="mapId"
    class="map"
  />
 
</template>

<script>
import { EventBus } from '@/vars'
import {mapGetters } from 'vuex'
export default {
  data(){
    return{
      mapInitialized: false,
      lat: '',
      long: ''
    }
  },
  props: {
    mapId: {
      type: String,
      default: 'map'
    },
    mapStyle: {
      type: String,
      default: 'height: 400px;'
    },

    // lat: {
    //   type: String,
    //   default: '994796.0822313513'
    // },
    // lon: {
    //   type: String,
    //   default: '1813280.8288418564'
    // },
    // logoPointPic: {
    //   type: String,
    //   default: logoPoint
    // },
  },
  mounted() {
    // this is where the wgs84 gets converted to UTMK
    //this might actually be overkill, removing the comp map incase the component gets remounted
    let oldmap = document.getElementById('comMap').remove()
    let newmap = document.createElement('div')
    newmap.id = 'comMap'
    newmap.classList.add('map')
    document.getElementsByClassName('rightHalf')[0].appendChild(newmap);
    this.setMap();


  },
  methods: {

    updateMapCoordinates(lat=1942003.363092 , lon=960029.376004, zoom=8) {
      //not getting long and lat from DB, instead get utmkXY, didn't need to convert it
      // var utmkXY = new sop.LatLng(lat, lon)
      try{
      this.marker.remove(this['$' + this.mapId]);
      }catch{

      }
      this.zoom = zoom;
      this['$' + this.mapId].setView(sop.utmk(lon, lat), zoom);
      this.marker = sop.marker([lon, lat]);
      this.marker.addTo(this['$' + this.mapId]);
    },
    setMap(){
      this['$' + this.mapId] = sop.map(this.mapId)
      try{
        var utmkXY = new sop.LatLng(this.getLat, this.getLong)
      } catch{
        var utmkXY = new sop.LatLng(37.5384, 126.9654)
      }
      this['$' + this.mapId].setView(sop.utmk(utmkXY.x, utmkXY.y), 8)
      // this['$' + this.mapId].scrollWheelZoom.disable()
      this.marker = sop.marker([utmkXY.x, utmkXY.y])
      this.marker.addTo(this['$' + this.mapId])
      // this.marker._icon.src = this.logoPointPic
      }
    // lat: '37.5384',
    // long: '126.9654'
  },
  computed: {
    ...mapGetters({
      selectedLanguage:  'languageModule/selectedLanguage',
      getLat: 'searchModule/getLat',
      getLong: 'searchModule/getLong'
    })
  },
  created() {
    // if(this.mapId == 'topMap') {
    //   EventBus.$on('avgPrice', data => {
    //     console.log('avgPrice overlay')
    //   })
    //   EventBus.$on('avgUnitPrice', data => {
    //     console.log('avgUnitPrice')
    //   })
    //   EventBus.$on('population', data => {
    //     console.log('population')
    //   })
    // }
    EventBus.$on('commSearch', data =>{
      console.log("comm search happened")
      //lat long were getting switched up for some reason
      this.updateMapCoordinates(data[1], data[0], 8)
    })
  }
}
</script>

<style >
.map{
    width: 35vw;
    height: 35vw;
    margin-left: 30px;
}

@media(max-width: 765px){
  .map{
    margin-left: 5vw;
    width: 90vw;
    height: 90vw;
  }
}
</style>