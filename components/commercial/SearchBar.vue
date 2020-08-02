<template>
  <div class="searchArea">
    <div class="field">
      <div class="control">
        <input 
          class="input is-info"
          v-model='searchedAddress'
          @keyup.enter='getAddresses'
        />
        <button @click="getAddresses" class="button btnInfo is-info">
          {{ selectedLanguage.search }}
        </button>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {EventBus} from '@/vars'
export default {
  data() {
    return {
      searchedAddress: '서울특별시 강남구'
    }
  },
  computed: {

    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage",
      addressLookupResults: 'commercialModule/buildingAddresses',
      queriedAddress: "searchModule/queriedAddress"
    })
  },
  methods: {
    updateAddress(){
      this.searchedAddress = this.queriedAddress;
    },
    ...mapActions({
      getCommercialAddresses: 'commercialModule/commercialAddressLookup'
    }),
    getAddresses(){
      this.$store.commit('viewModule/SET_COM_INIT_VIEW')
      this.$store.commit('commercialModule/RESET_COM_DETAILS')
      this.getCommercialAddresses(this.searchedAddress)
      this.$store.commit("viewModule/SET_COM_ADDRESS_VIEW");
    }
  },
  created(){
    EventBus.$on('updateComAddr', data => {

      this.updateAddress()
    })
  }
}
</script>

<style scoped>
  .input {
    max-width: 550px !important;
  }
  .searchArea {
    margin: 30px;
  }

  .btnInfo{
    background: var(--light-blue)
  }

  .control {
    display: flex;
    justify-content: space-between;
    max-width: 650px !important;
    margin-right: 5px;
  }
  @media (max-width: 765px) {
    .input {
      width: 70% !important;
    }
  }
</style>