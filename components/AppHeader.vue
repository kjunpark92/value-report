<template>
  <div id="Header">
    <nav>
      <div class="mob">
        <nuxt-link to="/main/"
          @click.native="resetResModel"
        >
          <img id="logo" src="/xailandLogo.png" alt="XAI Land's logo" />
        </nuxt-link>
      </div>
      <div class="links">
        <div class="link" @click="comingSoon">{{selectedLanguage.commReport}}</div>
        <nuxt-link
          class="link"
          @click.native="resetResModel"
          to="/main/residential"
        >{{selectedLanguage.ypReport}}</nuxt-link>
        <div class="link" @click="comingSoon">{{selectedLanguage.dataMarket}}</div>
      </div>
      <div class="user">
        <nuxt-link to="/main/selection" class="link">
          <i class="fa fa-pie-chart"></i>
        </nuxt-link>
        <div class="link" @click="comingSoon">
          <i class="fa fa-user"></i>
        </div>
        <div class="link linkLast" @click="comingSoon">
          <i class="fa fa-sign-out"></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage"
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
    }
  }
};
</script>

<style scoped>
#hamburger {
  display: none;
}
a.nuxt-link-active {
  color: #80d98a;
}
.user {
  display: flex;
  justify-content: space-evenly;
}
i {
  padding-right: 15px;
  font-size: 1.7rem;
}
#logo,
.links {
  margin: 0 50px;
}
#logo {
  border-radius: 50%;
  border: 3px solid var(--green);
  margin-left: 15px;
  width: 80px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: #242a46;
}
.links {
  display: flex;
}
.link {
  color: white;
  font-size: 1.4rem;
  margin-right: 30px;
  cursor: pointer;
}

.link:hover,
.link:active {
  color: var(--green);
  transition: 0.3s;
}
@media (max-width: 700px) {
/* 
  #hamburger {
    display: initial;
    position: absolute;
    color:white;
    top: 35px;
    right: 15px;
    cursor: pointer;
} */
  #logo {
    margin: 5px 0 0 0 !important;
  }
  .links,
  .user {
    display: none;
    flex-direction: column;
    margin: 0 !important;
    text-align: center;
    width: 90vw;
  }
  nav {
    flex-direction: column;
    padding-bottom: 10px;
    height: 92px;
    overflow: hidden;
    z-index: 0;
  }
  .link {
    border-bottom: 2px solid white;
    margin-right: 0 !important;
  }
  .linkLast {
    border-bottom: none !important;
  }
}
</style>