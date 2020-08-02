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
    this['$' + this.mapId] = sop.map(this.mapId)
    // this is where the wgs84 gets converted to UTMK
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
  },
  methods: {
    updateMapCoordinates(lat, lon, zoom) {
      try{
        var utmkXY = new sop.LatLng(lat, lon)
      } catch{
        var utmkXY = new sop.LatLng(37.5384, 126.9654)
      }      this.marker.remove(this['$' + this.mapId]);
      this.zoom = zoom;
      this['$' + this.mapId].setView(sop.utmk(utmkXY.x, utmkXY.y), zoom);
      this.marker = sop.marker([utmkXY.x, utmkXY.y]);
      this.marker.addTo(this['$' + this.mapId]);
    },
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
    EventBus.$on('resSearch', data =>{
      this.updateMapCoordinates(data.lat, data.long, 10)
    })
  }
}
</script>

<style scoped>
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