<template>
  <div class>
    <div class="error-message">
      <h1 class="is-size-1 main-message">Page Not Found</h1>
      <nuxt-link to="/login">
        <img class="lost404" src="/lost.png" alt="page not found" />
      </nuxt-link>
    </div>
    <div class="attribution">
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import selectionPage from "@/components/SelectionPage";

export default {
  components: {
    selectionPage
  },
};
</script>

<style scoped>
.lost404{
  height: 300px;
}
@media (min-width: 765px) {
  .main-message {
    font-size: 5rem !important;
  }
}
.main-message {
  color: var(--green);
  font-size: 3rem;
}
.error-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.attribution {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>