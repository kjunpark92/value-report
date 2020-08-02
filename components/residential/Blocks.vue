<template>
  <div class="residentialBlocks">
      <div 
        class="block" v-for="(block, index) in blocks" :key="index"
        @click='chooseBlock(block)'
      >
      <p>
        <i class="fa fa-building"></i>
      </p>
        {{block}}
      </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage",
      blocks: "searchModule/buildingBlocks",
      dongUnits: 'searchModule/dongUnits'
    })
  },
  methods: {
    chooseBlock(chosenBlock) {
      this.$store.commit('searchModule/STORE_UNITS_BY_FLOOR', this.dongUnits[chosenBlock])
      this.$store.commit("viewModule/SET_RES_APARTMENT_VIEW");
    }
  }
}
</script>

<style scoped>
*{
  transition: .2s;
  font-size: 1.5rem;
}

.fa{
  font-size: 3rem;
}

.residentialBlocks{
  display: flex;
  justify-content: space-evenly;
}
.block{
  text-align: center;
    padding: 15px;
    background: var(--light-blue);
    color: white;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0px;
}

.block:hover{
  background:var(--dark-blue);
  color:white;
}
</style>