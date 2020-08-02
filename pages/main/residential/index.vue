<template>
  <div class="residentialContainer">
    <div class="leftHalf">
      <Search />
      <div class="initialView" v-show="initialView">
        <Welcome />
        <History />
      </div>
      <div class="addressView" v-show="addressView">
        <Addresses />
      </div>
      <div class="dongView" v-show="blockView">
          <Blocks/>
      </div>
      <div class="apartmentView" v-show="apartmentView">
        <Apartments />
      </div>
      <div class="estimateView" v-show="estimateView">
        <Estimate/>
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
import Search from "~/components/residential/Search";
import Welcome from "~/components/residential/Welcome";
import History from "~/components/residential/SearchHistory";
import Addresses from "~/components/residential/Addresses";
import Apartments from "~/components/residential/Apartments";
import Blocks from "~/components/residential/Blocks";
import Estimate from "~/components/residential/Estimate";
import Map from "~/components/residential/Map";

import { EventBus } from "@/vars";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mapId: 'resiMap',
      mapStyle: '',
      lat: '37.5665',
      lon: '126.978'
    }
  },
  middleware: 'notAuthenticated',
  components: {
    Search,
    Welcome,
    History,
    Map,
    Addresses,
    Apartments,
    Blocks,
    Estimate
  },
  computed: {
    ...mapGetters({
      initialView: "viewModule/resInitialView",
      addressView: "viewModule/resAddressView",
      apartmentView: "viewModule/resApartmentView",
      estimateView: "viewModule/resEstimateView",
      blockView: "viewModule/resBlockView"
    })
  }
};
</script>

<style scoped>
.addressView {
  height: 600px;
  overflow-y: scroll;
}
.residentialContainer {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  width: 100vw;
}
.rightHalf {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.leftHalf,
.rightHalf {
  width: 45vw;
}

@media (max-width: 765px) {
  .residentialContainer {
    flex-direction: column;
  }
  .leftHalf,
  .rightHalf {
    width: 100vw;
  }
  .rightHalf {
    display: initial !important;
  }
}
</style>