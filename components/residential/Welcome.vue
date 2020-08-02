<template>
  <div>
      <div class="welcomeText">
          <div class="welcomeHeader is-size-2">
              {{selectedLanguage.greetings}}{{userName}}
          </div>
          <div class="welcomePara is-size-5">
              <p>{{selectedLanguage.welcomep1}}</p>
              <p>{{selectedLanguage.welcomep2}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      selectedLanguage: "languageModule/selectedLanguage",
      userName: "authModule/userEmail"
    })
  }
}
</script>

<style @scoped>
.welcomeText{
    max-width: 650px;
    text-align: center;
    margin-left: 30px;
    background: var(--green);
    color: white;
    padding: 30px;
}

@media(max-width: 765px){
    .welcomeText{
        margin-left: 0px !important;
        margin-bottom: 15px;
    }
}
</style>