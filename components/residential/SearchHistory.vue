<template>
  <div class="searchContainer">
    <div class="searchHeaderContainer">
      <div class="searchTitle is-size-2">{{lang.recent_searches}}</div>
      <div @click="clearHist" v-if="getHist.length > 0" class="clearSearched is-size-5">{{lang.clear}}</div>
    </div>
    <div v-if="getHist.length > 0" class="pastSearches">
      <div class="card" v-for="searches in getHist" :key="searches.id">
        <div @click="search(searches.address)" class="card-content">
          <div class="cardTitle">
            <p class="title is-size-4">{{searches.address}}</p>
            <p>{{searches.date}}</p>
          </div>
          <p>{{lang.est_price}}: ₩{{localeString(searches.estPrice)}}</p>
          <p>{{lang.open_addr}}</p>
        </div>
      </div>
    </div>
    <div v-else>
      No recent Searches
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getHist: 'userHistoryModule/getResHistory',
      lang: 'languageModule/selectedLanguage'
    })
  },
  methods: {
    search(addr){
      this.$store.commit("searchModule/RESET_SEARCH_MODULE");
      var response = this.$store.dispatch("searchModule/getAddrsFromJuso", {
        addr
      });
      this.$store.commit("searchModule/UPDATE_QUERIED_ADDRESS", addr)
      this.$store.commit("viewModule/SET_RES_ADDRESS_VIEW");
    },
    clearHist(){
      this.$store.commit("userHistoryModule/CLEAR_RES_HIST")
    },
    localeString(num){
      return String(num.toLocaleString())
    }
  }
};
</script>

<style scoped>
.pastSearches{
    height: 350px;
    overflow: scroll;
        overflow-x: hidden;

}
.card-content:hover,
.card-content:active {
  transition: 0.3s;
  box-shadow: 0 0.5em 2em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
}
.cardTitle {
  display: flex;
  justify-content: space-between;
}
.card {
  cursor: pointer;
  margin-top: 30px;
}
.searchContainer {
  max-width: 650px;
  margin: 15px 0 0 30px;
}
.searchHeaderContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.clearSearched{
  cursor: pointer;
}
</style>