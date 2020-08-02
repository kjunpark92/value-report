<template>
    <div id="registerContainer">
    <div class="left">
      <img src="/login.png" alt="XAI Land logo background" />
    </div>
    <div class="right">
      <div class="registerInputs">
        <input aria-label="Input field for First name" :placeholder="selectedLanguage.firstName" type="text"/>
        <input aria-label="Input field for Last name" :placeholder="selectedLanguage.lastName" type="text">
        <input aria-label="Input field for Email" :placeholder="selectedLanguage.email" type="text" />
        <input aria-label="Input field for Password" :placeholder="selectedLanguage.password" type="password" />
        <input aria-label="Input field for Confirming Password" :placeholder="selectedLanguage.confirmPassword" type="password" />

        <div class="buttonContainer">
          <nuxt-link class="button btnLogIn" to='/login'>{{selectedLanguage.login}}</nuxt-link>
          <nuxt-link class="button btnSignUp" to='/main/residential'>{{selectedLanguage.signup}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      selectedLanguage:  'languageModule/selectedLanguage'
    })
  }
}
</script>

<style scoped>

@media(max-width: 800px){
  #registerContainer {
    display: initial !important;
  }
  .left, .right{
    height: auto !important;
  }
  .registerInputs{
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

#registerContainer {
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

.registerInputs{
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