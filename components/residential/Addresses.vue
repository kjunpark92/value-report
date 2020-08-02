<template>
  <div class="residentialAddresses">
    <div >
    <div  class="results" v-for="(res, index) in results" :key="index">
      <div class="found" v-if="res.jibunAddr !== 'Not Found'">
      <div class="card" @click="getUnits(res)">
        <p>{{res.roadAddr}}</p>
        <p>{{res.jibunAddr}}</p>
        <p>{{res.engAddr}}</p>
      </div>
      </div>
      <div class="notFound" v-else>
        This address could not be located.
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import {EventBus} from '@/vars'
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      results: "searchModule/jusoRes"
    })
  },
  methods: {
    async getUnits(addr) {
      var adm_code = addr.bdMgtSn.substr(0, 10);
      var bunji = addr.bdMgtSn.substr(11, 8);
    //   await this.storeAddrDetails({
    //     dong: addr.jibunAddr,
    //     road: addr.roadAddr,
    //     eng: addr.engAddr
    //   });

      var result = await this.$store.dispatch("searchModule/getUnits", {
        adm_code,
        bunji
      });
      if(result === 'notfound'){
        //not found
      }
      else if(result === 'block'){
        await this.$store.commit("viewModule/SET_RES_BLOCK_VIEW");
      }
      else if(result === 'apartment'){
         this.$store.commit("viewModule/SET_RES_APARTMENT_VIEW");
      }
    }
  }
};
</script>

<style scoped>
.residentialAddresses {
  margin: 0 30px;
  overflow-y: hidden;
}
.card {

  margin-bottom: 15px !important;
  cursor: pointer;
}

.card:hover, .card:hover > p{
  transition: .3s;
  background: #00d1b2;
  color:white;
}

p {
  color: var(--very-dark-blue);
  text-align: center;
}
</style>