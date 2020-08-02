<template>
  <div class="StatusHeader">
    <div class="headerContainer">
      <div class="apiContainer">
          <div :class="[jusoAddrs=='online'? 'online': 'offline', jusoAddrs=='checking...'?'testing':'']"></div>
          <div class="checkJuso">Juso Lookup : {{jusoAddrs}}</div>
      </div>
      <div class="apiContainer">
        <div :class="[ypDetails=='online'? 'online': 'offline', ypDetails=='checking...'?'testing':'']"></div>
        <div class="checkYPDetail">Yeonlip Details : {{ypDetails}}</div>
      </div>
      <div class="apiContainer">
        <div :class="[commAddrs=='online'? 'online': 'offline', commAddrs=='checking...'?'testing':'']"></div>
        <div class="checkCommAddr">Commercial Lookup : {{commAddrs}}</div>
      </div>
      <div class="apiContainer">
        <div :class="[commDetails=='online'? 'online': 'offline', commDetails=='checking...'?'testing':'']"></div>
        <div class="checkCommDetail">Commercial Details : {{commDetails}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import { commercialAddress } from "~/store/apis";
//this component sends a request to the endpoints when loaded to check if they're up
export default {
  computed: {
    ...mapGetters({
      commAddrs: 'serverStatusModule/commAddrs',
      commDetails: 'serverStatusModule/commDetails',
      jusoAddrs: 'serverStatusModule/jusoAddrs',
      ypDetails: 'serverStatusModule/ypDetails'

    })
  },
  methods:{
    ...mapMutations({
      checkServers: 'serverStatusModule/CHECK_SERVERS'
    })
  },
  created(){
    this.checkServers()
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .StatusHeader{
    display: none;
  }
}
.StatusHeader {
  width: 100vw;
  height: 45px;
  background: black;
  cursor: default;
}
.headerContainer {
  z-index: 50;
  background: black;
  width: 100vw;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-evenly;
  align-items: center;
}
.online {
  width: 10px;
  height: 10px;
  background: var(--green);
  border-radius: 50%;
  color: white;
}

.offline {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  color: white;
}
.testing{
  background: yellow !important;
}
/* .offline::after {
  content: " offline";
}
.online::after {
  content: " online";
} */
.apiContainer {
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
  border: 1px solid var(--green);
  border-radius: 8px;
}

.apiContainer div {
  padding: 3px;
}
</style>