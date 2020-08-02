<template>
  <div class="buildingList">
    <div 
      v-for='(i, index) in addressLookupResults'
      :key='index'
      class='results'
      @click='getDetails(i.dong)'
    >
    <div class="card">
      <p>
      {{ i.dong }}
      </p>
      <p>
        {{i.road}}
      </p>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      addressLookupResults: 'commercialModule/buildingAddresses'
    })
  },
  methods: {
    ...mapActions({
      getCommercialDetails: 'commercialModule/getCommercialDetails'
    }),
    getDetails(dongAdr){
      this.getCommercialDetails(dongAdr);
      this.$store.commit("viewModule/SET_COM_ESTIMATE_VIEW");
    }
  }
}
</script>

<style scoped>
  .buildingList {
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