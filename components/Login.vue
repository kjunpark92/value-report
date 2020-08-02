<template>
  <div id="loginContainer">
    <div class="left">
      <img src="/login.png" alt="XAI Land logo background" />
    </div>
    <div class="right">
      <div class="logInInputs">
        <input aria-label="Input field for Email" tabindex="0" :placeholder="selectedLanguage.email" v-model="login.username" type="text" />
        <input aria-label="Input field for Password" @keyup.enter="postLogin" :placeholder="selectedLanguage.password" v-model="login.password" type="password" />
        <div class="buttonContainer">
          <nuxt-link class="button btnSignUp" to='/register'>{{selectedLanguage.signup}}</nuxt-link>
          <button class="button btnLogIn" @click="postLogin">{{selectedLanguage.login}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

import {mapGetters} from 'vuex'
export default {
  data() {
    return{
      login :{
        username: '',
        password: ''
      }
    }
  },
  middleware: 'notAuthenticated',
  computed: {
    ...mapGetters({
      selectedLanguage:  'languageModule/selectedLanguage'
    })
  },
  methods: {
    async postLogin () {
      try {
        // let response = await this.$auth.loginWith('local', { data: this.login })
          var link_auth = {
            user: this.login,
            pass: this.password            
          }
          let auth = JSON.parse(JSON.stringify(link_auth))
          await this.$store.commit('authModule/login', {
            auth
          })
          auth = ''
        }
      catch (err) {
        console.log(alert('wrong creds'))
      }
    }
  },
  mounted(){
    // try{
    //   this.$store.commit('authModule/checkValidToken')
    // }catch{
      
    // }
  }
}
</script>

<style scoped>

@media(max-width: 800px){
  #loginContainer {
    display: initial !important;
  }
  .left, .right{
    height: auto !important;
  }
  .logInInputs{
    height: initial !important;
    margin-top: 20%;
  }
}

*{
  transition: .5s;
}

input {
  font-size: 2rem;
  outline: 0;
  border-width: 0 0 2px;
  border-color: var(--green);
  width: 70%;
  margin-bottom: 5%;
}

input:focus {
  border-color: var(--light-blue)
}

#loginContainer {
  display: flex;
  align-items: center;
}

.btnSignUp{
  background: var(--green);
  color:white;
}
.btnSignUp:hover{
  background: var(--dark-green);
}

.btnLogIn{
  background: var(--light-blue);
  color: white;
}

.btnLogIn:hover{
  background: var(--dark-blue);
}

.left, .right{
  width: 100%;
  height: 100vh;
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #102246;
}

.logInInputs{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.buttonContainer{
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 25px;
}

.button{
  font-size: 1.7rem;
}

</style>