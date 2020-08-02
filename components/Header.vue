<template>
  <div id="Header">
      <nav>
        <nuxt-link to="/login">
          <img id="logo" src="/xailandLogo.png" alt="XAI Land's logo">
        </nuxt-link>
        <div class="links">
          <nuxt-link class="link" to="/login">{{selectedLanguage.login}}</nuxt-link>
          <nuxt-link class="link" to='/register'>{{selectedLanguage.signup}}</nuxt-link>
        </div>
      </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage"
    })
  },

}
</script>

<style scoped>
#logo, .links{
  margin: 0 50px;
}
#logo{
    border-radius: 50%;
    border: 3px solid var(--green);
    margin-left: 15px;
    width: 80px;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background: #242a46;
}
.link{
  color: white;
  font-size: 1.4rem;
  margin-right: 15px;
}
@media(max-width: 700px){
  .links{
    margin: 0 !important;
  }
}
</style>