<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <!-- <StatusHeaderSlide /> -->
        <ul v-if="!loggedIn" class="nav-list" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link to="/main/commercial">{{selectedLanguage.commReport}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click.native="resetResModel"
              to="/main/residential"
            >{{selectedLanguage.ypReport}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/main/market">{{selectedLanguage.dataMarket}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/main/account">
              {{selectedLanguage.myAccount}}
              <i class="fa fa-user"></i>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login" @click.native="logout">
              {{selectedLanguage.logout}}
              <i class="fa fa-sign-out"></i>
            </nuxt-link>
          </li>
        </ul>
        <ul v-else class="nav-list" @click="$emit('close')" >
          <li class="nav-item">
            <nuxt-link to="/register">{{selectedLanguage.signup}}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login">{{selectedLanguage.login}}</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StatusHeaderSlide from '../StatusHeaderSlide'
export default {
  name: "TheSidenav",
  components: {
    StatusHeaderSlide
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
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
    //this will reset everything to default settings when clicked, and change the view back
    resetResModel() {
      this.$store.commit("viewModule/SET_RES_INITIAL_VIEW");
      this.$store.commit("searchModule/RESET_SEARCH_MODULE");
    },
    resetComModel(){
      this.$store.commit('viewModule/SET_COM_INIT_VIEW')
      this.$store.commit('commercialModule/RESET_COM_DETAILS')
    },
    logout() {
      try {
        // console.log("logging out...");
        // let response = await this.$auth.loginWith('local', { data: this.login })
        var auth = {
          user: "",
          loggedIn: false
        };
        this.$store.commit("authModule/logout", {
          auth
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0 7px;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: var(--green);
}
</style>
