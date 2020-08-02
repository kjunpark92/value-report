<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/main">XAI Land</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items" v-if="!loggedIn">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link @click.native="resetComModel" to="/main/commercial">{{selectedLanguage.commReport}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link @click.native="resetResModel" to="/main/residential">{{selectedLanguage.ypReport}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/main/market">{{selectedLanguage.dataMarket}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/main/account">{{selectedLanguage.myAccount}} <i class="fa fa-user"></i></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login" @click.native="logout">
            {{selectedLanguage.logout}} <i class="fa fa-sign-out"></i>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="navigation-items" v-else>
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/register">{{selectedLanguage.signup}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login">{{selectedLanguage.login}}</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";
import { mapGetters, mapState } from "vuex";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  computed: {
    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage",
      loggedIn: "authModule/logginStatus"
    })
  },
  methods: {
    comingSoon() {
      this.$toast.success("Coming soon").goAway(1500);
    },
    logout(){
      try {
          this.$store.commit('authModule/logout')
        }
      catch (err) {
        console.log(err)
      }
    },
    resetComModel(){
      this.$store.commit('viewModule/SET_COM_INIT_VIEW')
      this.$store.commit('commercialModule/RESET_COM_DETAILS')
    },
    //this will reset everything to default settings when clicked, and change the view back
    resetResModel() {
      this.$store.commit("viewModule/SET_RES_INITIAL_VIEW");
      this.$store.commit("searchModule/RESET_SEARCH_MODULE");
    }
  }
};
</script>


<style scoped>


.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  z-index: 1001;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: var(--green);
}
</style>
