<template>
  <div>
    <!-- <div class="buildingStats"> -->
    <div :class="[details.address.address_dong.length > 1? 'slideInLeft': 'noOp']">
      <!-- {{details.address}} -->
      <div class="rowAddr" v-if="details.address.address_dong">
        <div class>{{lang.dong_addr}}:</div>
        <div class>{{details.address.address_dong}}</div>
      </div>
      <div class="rowAddr" v-if="details.address.address_road">
        <div class>{{lang.road_addr}}:</div>
        <div class>{{details.address.address_road}}</div>
      </div>
      <div class="row" v-if="details.price.est_price">
        <div class="col">{{lang.est_price}}:</div>
        <div class="col2">₩{{tls(details.price.est_price)}}</div>
      </div>
      <div class="row" v-if="details.price.est_price_sqm">
        <div class="col">{{lang.est_price_sqm}}:</div>
        <div class="col2">₩{{tls(details.price.est_price_sqm)}}</div>
      </div>
      <div class="row" v-if="details.address.building_name != null">
        <div class="col">{{lang.building_name}}:</div>
        <div class="col2">{{details.address.building_name}}</div>
      </div>
      <div class="row" v-if="details.address.gu_code">
        <div class="col">{{lang.gu_code}}:</div>
        <div class="col2">{{details.address.gu_code}}</div>
      </div>
      <div class="row" v-if="details.address.dong_code">
        <div class="col">{{lang.dong_code}}:</div>
        <div class="col2">{{details.address.dong_code}}</div>
      </div>
      <!-- <div class="row">
        <div class="col">{{lang.land_type_code}}:</div>
        <div class="col2">{{details.address.land_type_code}}</div>
      </div>-->
      <!-- <div class="row">
        <div class="col">{{lang.bun}}:</div>
        <div class="col2">{{details.address.bun}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.ji}}:</div>
        <div class="col2">{{details.address.ji}}</div>
      </div>-->
      <div class="row" v-if="details.address.road_code">
        <div class="col">{{lang.road_code}}:</div>
        <div class="col2">{{details.address.road_code}}</div>
      </div>
      <!-- <div class="row">
        <div class="col">{{lang.new_bun}}:</div>
        <div class="col2">{{details.address.new_bun}}</div>
      </div>
      <div class="row">
        <div class="col">{{lang.new_ji}}</div>
        <div class="col2">{{details.address.new_ji}}</div>
      </div>-->

      <div class="row" v-if="details.property.base_area">
        <div class="col">{{lang.base_area}}:</div>
        <div class="col2">{{tls(details.property.base_area)}}m²</div>
      </div>
      <div class="row" v-if="details.property.total_area">
        <div class="col">{{lang.total_area}}:</div>
        <div class="col2">{{tls(details.property.total_area)}}m²</div>
      </div>
      <div class="row" v-if="details.property.structure_name">
        <div class="col">{{lang.structure_name}}:</div>
        <div class="col2">{{details.property.structure_name}}</div>
      </div>
      <div class="row" v-if="details.property.structure_others">
        <div class="col">{{lang.structure_others}}:</div>
        <div class="col2">{{details.property.structure_others}}</div>
      </div>
      <div class="row" v-if="details.property.main_use_name">
        <div class="col">{{lang.main_use_name}}:</div>
        <div class="col2">{{details.property.main_use_name}}</div>
      </div>
      <div class="row" v-if="details.property.main_use_others">
        <div class="col">{{lang.main_use_others}}:</div>
        <div class="col2">{{details.property.main_use_others}}</div>
      </div>
      <div class="row" v-if="details.property.roof_name">
        <div class="col">{{lang.roof_name}}:</div>
        <div class="col2">{{details.property.roof_name}}</div>
      </div>
      <div class="row" v-if="details.property.roof_name_others">
        <div class="col">{{lang.roof_name_others}}:</div>
        <div class="col">{{details.property.roof_name_others}}</div>
      </div>
      <div class="row" v-if="details.property.height">
        <div class="col">{{lang.height}}:</div>
        <div class="col2">{{details.property.height}}</div>
      </div>
      <div class="row" v-if="details.property.aboveground">
        <div class="col">{{lang.floors}}:</div>
        <div class="col2">{{details.property.aboveground}}</div>
      </div>
      <div class="row" v-if="details.property.underground">
        <div class="col">{{lang.subfloors}}:</div>
        <div class="col2">{{details.property.underground}}</div>
      </div>
      <div class="row" v-if="details.property.passenger_elevator">
        <div class="col">{{lang.elevators}}:</div>
        <div class="col">{{details.property.passenger_elevator}}</div>
      </div>
      <div class="row" v-if="details.property.emergency_elevator">
        <div class="col">{{lang.emergency_elevators}}:</div>
        <div class="col">{{details.property.emergency_elevator}}</div>
      </div>
      <div class="row" v-if="details.property.construction_authorize_date">
        <div class="col">{{lang.construction_authorize_date}}:</div>
        <div class="col2">{{(breakDate(details.property.construction_authorize_date))}}</div>
      </div>
      <div class="row" v-if="details.property.construction_complete_date">
        <div class="col">{{lang.construction_complete_date}}:</div>
        <div class="col2">{{(breakDate(details.property.construction_complete_date))}}</div>
      </div>
      <div class="row" v-if="details.property.use_confirmed_date">
        <div class="col">{{lang.auth_date}}:</div>
        <div class="col2">{{(breakDate(details.property.use_confirmed_date))}}</div>
      </div>
      <div class="row" v-if="details.property.area_usage">
        <div class="col">{{lang.area_usage}}:</div>
        <div class="col">{{details.property.area_usage}}</div>
      </div>
      <div class="row" v-if="details.property.land_area">
        <div class="col">{{lang.land_area}}:</div>
        <div class="col">{{tls(details.property.land_area)}}m²</div>
      </div>
      <div class="row" v-if="details.property.land_price_per_sqm">
        <div class="col">{{lang.land_price_per_sqm}}:</div>
        <div class="col2">₩{{tls(details.property.land_price_per_sqm)}}</div>
      </div>
      <div class="row" v-if="Number(details.property.land_price) > 0">
        <div class="col">{{lang.land_price}}:</div>
        <div class="col2">{{tls(details.property.land_price)}}</div>
      </div>
      <div class="row" v-if="details.property.construction_year">
        <div class="col">{{lang.construction_year}}:</div>
        <div class="col2">{{details.property.construction_year}}</div>
      </div>
      <div class="row" v-if="details.price.location_score">
        <div class="col">{{lang.location_score}}:</div>
        <div class="col">{{details.price.location_score}}</div>
      </div>
      <div class="row" v-if="details.price.growth">
        <div class="col">{{lang.growth}}:</div>
        <div class="col2">{{details.price.growth}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      details: "commercialModule/buildingDetails",
      lang: "languageModule/selectedLanguage"
    })
  },
  methods: {
    breakDate(n){
      n = n.toString()
      var y = n.substr(0,4)
      var m = n.substr(4,2)
      var d = n.substr(6,2)
      return (m + "/" + d + "/" + y)
    },
    //to locale string, when getting new data, invoking this directly on the data
    //doesn't seem to do the correct string manipulation, therefore, this function
    tls(s){
      return Number(s).toLocaleString()
    }
  }
};
</script>


<style scoped>
.BuildingStats {
  padding: 0 30px;
}
.Selector {
  display: flex;
  justify-content: space-around;
}
.col {
  width: 50%;
}
.col2 {
  width: 50%;
}
.rowAddr {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
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

* {
  transition: 0.3s;
}
.noOp {
  opacity: 0;
  padding: 0 30px;
}

.op {
  opacity: 1;
  padding: 0 30px;
}

@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  opacity: 1;
  padding: 0 30px;
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

</style>