<template>
  <div class="commercialContainer">
    <div class="leftHalf">
      <search-bar />
      <div class="initialView" v-show="initialView">
        <Welcome />
        <SearchHistory/>
      </div>
      <div class="buildingList" v-show="addressView">
        <building-list />
      </div>
      <div class="buildingDetails" v-show="estimateView">
        <building-details />
      </div>
    </div>
    <div class="rightHalf">
      <Map 
        :mapId='mapId'
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchBar from '@/components/commercial/SearchBar'
import Welcome from '@/components/commercial/Welcome';
import SearchHistory from '@/components/commercial/SearchHistory'
import BuildingList from '@/components/commercial/BuildingList'
import BuildingDetails from '@/components/commercial/BuildingDetails'
import Map from "@/components/commercial/Map";

export default {
  data() {
    return {
      mapId: 'comMap',
      mapStyle: '',
      lat: '37.5665',
      lon: '126.978'
    }
  },
  components: {
    SearchBar,
    Welcome,
    SearchHistory,
    BuildingList,
    BuildingDetails,
    Map
  }, 
  computed: {
    ...mapGetters({
      initialView: "viewModule/comInitialView",
      addressView: "viewModule/comAddressView",
      estimateView: "viewModule/comEstimateView"
    })
  },
  middleware: 'notAuthenticated',
  mounted(){
    this.$store.commit('commercialModule/RESET_COM_DETAILS')
    this.$store.commit('viewModule/SET_COM_INIT_VIEW')
  }

}
</script>

<style >
  .commercialContainer {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    width: 100vw;
  }
  .leftHalf, .rightHalf {
    width: 45vw;
  }
    .rightHalf {
    display: flex;
    justify-content: center;
    margin-top: 30px;  
  }
  @media (max-width: 765px) {
  .commercialContainer {
    flex-direction: column;
  }
  .leftHalf,
  .rightHalf {
    width: 100vw;
  }

}
</style>