<template>
  <div class="main">
    <!-- <StatusHeader/> -->
    <MainSelectionPage/>
  </div>
</template>

<script>
import StatusHeader from '@/components/StatusHeader'
import MainSelectionPage from '@/components/MainSelectionPage'
export default {
  components: {
    StatusHeader,
    MainSelectionPage
  },

  middleware: 'notAuthenticated'
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