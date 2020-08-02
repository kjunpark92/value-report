<template>
  <div class="searchArea">
    <div class="field">
      <div class="control">
        <input class="input is-primary"  v-on:keyup.enter="searchResidential" type="text" v-model="address" />
        <button class="button is-primary" @click="searchResidential">{{selectedLanguage.search}}</button>
        <!-- {{searched}} -->
      </div>
    </div>
  </div>
</template>

<script>
import {EventBus} from '@/vars'
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      address: "서울특별시 강남구 논현동 23-8",
    };
  },
  methods: {
    updateAddress(){
      this.address = this.queriedAddress;
    },
    searchResidential() {
      //reset everything to blank
      this.searched = "Searched"
      this.$store.commit("viewModule/SET_RES_INITIAL_VIEW");
      this.$store.commit("searchModule/RESET_SEARCH_MODULE");
      var response = this.$store.dispatch("searchModule/getAddrsFromJuso", {
        addr: this.address
      });
      this.$store.commit("viewModule/SET_RES_ADDRESS_VIEW");
    }
  },
  computed: {
    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage",
      queriedAddress: "searchModule/queriedAddress"
    })
  },
  created(){
    EventBus.$on('updateResAddr', data => {
      this.updateAddress()
    })
  }
};
</script>

<style scoped>
.input {
  max-width: 550px !important;
}
.searchArea {
  margin: 30px;
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