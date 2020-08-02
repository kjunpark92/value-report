<template>
  <div id="selectionPage">
    <div class="cardsContainer">
      <div class="card">
        <div class="title is-4 has-text-centered">
          <h2>{{selectedLanguage.commReport}}</h2>
        </div>
        <div class="card-image">
          <img src="/searcher.png" alt="Access XAI Commercial Report" />
        </div>
        <div class="cardText">
          <ul>
            <li>{{selectedLanguage.commR1}}</li>
            <li>{{selectedLanguage.commR2}}</li>
          </ul>
        </div>
        <div class="buttonContainer">
          <div class="availableService title is-5">{{selectedLanguage.betaWIP}}</div>
          <div class="tryButton">
            <nuxt-link
              @click.native="selectedService('commercial')"
              to="/login"
              class="is-5 title button is-primary"
            >{{selectedLanguage.try}}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="title is-4 has-text-centered">
          <h2>{{selectedLanguage.ypReport}}</h2>
        </div>
        <div class="card-image">
          <img src="/data-analytics.png" alt="Access XAI Yeonlip Report" />
        </div>
        <div class="cardText">
          <ul>
            <li>{{selectedLanguage.ypR1}}</li>
            <li>{{selectedLanguage.ypR2}}</li>
          </ul>
        </div>
        <div class="buttonContainer">
          <div class="availableService title is-5">{{selectedLanguage.betaWIP}}</div>
          <div class="tryButton">
            <nuxt-link
              @click.native="selectedService('yeonlip')"
              to="/login"
              class="is-5 title button is-primary"
            >{{selectedLanguage.try}}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="title is-4 has-text-centered">
          <h2>{{selectedLanguage.dataMarket}}</h2>
        </div>
        <div class="card-image">
          <img src="/code.png" alt="Access XAI Data Market" />
        </div>
        <div class="cardText">
          <ul>
            <li>{{selectedLanguage.dmR1}}</li>
            <li>{{selectedLanguage.dmR2}}</li>
            <li>{{selectedLanguage.dmR3}}</li>
          </ul>
        </div>
        <div class="availableService title is-4 has-text-centered">{{selectedLanguage.comingSoon}}</div>
        <!-- <div class="tryButton"></div> -->
      </div>
    </div>Icons made by
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  methods: {
    selectedService(service) {
      // console.log(service);
    }
  },
  computed:{
    ...mapGetters({
    selectedLanguage: 'languageModule/selectedLanguage'
  })
  }
};
</script>

<style scoped>
@media(max-width: 800px){
    .cardsContainer {
        display: flex;
        justify-content: space-evenly;
        flex-flow: column !important;
        align-items: center;
        height: auto !important;
        margin: 10% 0 !important;
    }

    .card{
        margin-bottom: 15px;
    }
}

*{
  transition: .5s;
}
ul {
  list-style-type: disc;
}
.buttonContainer {
  margin-top: 8px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-image {
  text-align: center;
}
.card {
  height: 500px;
  width: 350px;
  padding: 35px;
}
.cardsContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10%;
}
.availableService {
  margin-top: 15px;
}

img {
  width: 200px;
}
</style>