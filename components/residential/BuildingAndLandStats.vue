<template>
  <div class="BuildingAndLandStats">
    <div class="btnRow">
      <div class="btnCol">
        <div
          class="BtnBuildingStats button"
          :class="{'is-primary': !land_selected }"
          @click="land_selected = false"
        >Building Stats</div>
      </div>
      <div class="btnCol">
        <div
          class="BtnLandStats button"
          :class="{'is-primary': land_selected }"
          @click="land_selected = true"
        >Land Stats</div>
      </div>
    </div>
    <div class="BuildingStats" v-show="!land_selected">
      <div class="row">
        <div class="col">{{lang.floors}}:</div>
        <div class="col">{{floors}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.subfloors}}:</div>
        <div class="col">{{subfloors}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.constructed}}:</div>
        <div class="col">{{constructed}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.elevators}}:</div>
        <div class="col">{{elevators}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.emergency_elevators}}</div>
        <div class="col">{{emergencyElevators}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.height}}:</div>
        <div class="col">{{height}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.base_area}}:</div>
        <div class="col">{{base_area}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.land_area}}:</div>
        <div class="col">{{land_area}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.total_area}}:</div>
        <div class="col">{{total_area}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.base_to_land}}:</div>
        <div class="col">{{base_to_land}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.constructed_date}}:</div>
        <div class="col">{{constructed_date}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.auth_date}}</div>
        <div class="col">{{authorized_use_date}}</div>
      </div>
    </div>
    <div class="LandStats" v-show="land_selected">
      <div class="row">
        <div class="col">{{lang.land_cgr}}:</div>
        <div class="col">{{land_cgr_code}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.purpose_area}}:</div>
        <div class="col">{{purpose_area}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.top_code}}:</div>
        <div class="col">{{topographical_code}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.road_code}}:</div>
        <div class="col">{{road_side_code}}</div>
      </div>
      <div class="row">
        <div class="col">Other Topographical Code:</div>
        <div class="col">{{tpgrphfrmcodenm}}</div>
      </div>
      <div class="row">
        <div class="col">Other Land Code:</div>
        <div class="col">{{pblntPclnd}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      lang: "languageModule/selectedLanguage"
    })
  },
  data() {
    return {
      land_selected: false,
      floors: "6",
      subfloors: "1",
      constructed: "1995",
      elevators: "1",
      emergencyElevators: "0",
      height: "42",
      base_area: "1234",
      land_area: "1234",
      total_area: "1234",
      base_to_land: "1234",
      constructed_date: "1994",
      authorized_use_date: "1994",
      land_cgr_code: 5543432432,
      purpose_area: 10,
      topographical_code: 195,
      road_side_code: 10,
      tpgrphfrmcodenm: 42,
      pblntPclnd: 1234
    };
  }
};
</script>

<style scoped>
.Selector {
  display: flex;
  justify-content: space-around;
}
.col {
  width: 50%;
}
.row,
.btnRow {
  display: flex;
  width: 100%;
}
.row {
  border-bottom: 1px solid grey;
}
.btnCol {
  width: 50%;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}
.BtnContainer {
  display: flex;
  justify-content: space-evenly;
}
.BuildingAndLandStats {
  padding: 30px;
}
</style>