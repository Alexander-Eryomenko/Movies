<template>
  <v-app>
    <div class="wrapper-header">
      <div class="header">
      <div class="header__logo">
          <router-link to="/">
            <img src="@/assets/logo.svg" alt="logo">
          </router-link>
      </div>
      <div class="header__nav">
        <v-btn to="/raiting-films" x-small class="header__nav__btn">Raiting films</v-btn>
        <v-btn to="/some-films" x-small class="header__nav__btn">Some films</v-btn>
      </div>
    </div>
    </div>
    <v-main>
      <v-container>
          <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import LoaderPage from '@/components/LoaderPage.vue'

export default {
  name: 'App',
  components: {
    // LoaderPage
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper-header {
  background-color: green;
  width: 100%;
  min-height: 100px;
}
.header {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__logo {
    height: 50%;
    width: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__nav {
    display: flex;
    column-gap: 10px;
  }
}

  .title {
    text-align: center;
  }
</style>
