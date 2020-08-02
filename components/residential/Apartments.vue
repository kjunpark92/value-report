<template>
  <div class="ResidentialApartments">
    <div class="floors" v-for="(floor, index) in unitsByFloor" :key="index">
      <div class="floor">
        <div class="units" v-for="(res, index) in floor.units" :key="index" @click="showEstimate(res)">
          <div class="unit" >
            {{res.unit_name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  computed:{
    ...mapGetters({
      aptRes: 'searchModule/sortedApts',
      buildingFloors: 'searchModule/buildingFloors',
      unitsByFloor: 'searchModule/unitsByFloor'
    })
  },
  methods:{
    showEstimate(apt){
      // alert(JSON.stringify(apt))
      var payload = {
        dong: apt.address_dong,
        street: apt.address_road,
        unit: apt.unit_name
      }
      this.$store.commit('searchModule/SAVE_ADDR_DETAILS', payload)
      this.$store.commit("viewModule/SET_RES_ESTIMATE_VIEW");
    }
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
    transition: .1s;
  }
  tr{
    display: inline;
  }
  .ResidentialApartments{
    margin: 0 30px;
  }
  .floor{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .units{
    border: 1px solid var(--dark-green);
    font-size: 1.7rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .units:hover{
    cursor: pointer;
    color: white;
    background: var(--dark-green);
  }
  .roof{
    border-left: 8rem solid transparent;
    border-right: 8rem solid transparent;
    border-bottom: 5rem solid var(--dark-green);
  }
</style>