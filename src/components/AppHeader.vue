<template>
  <div class="app-header">
    <div class="app-header__container">
      <router-link class="app-header__logo" to="/">
        <img class="app-header__logo-img" src="@/assets/logo.svg" alt="logo">
      </router-link>
      <div class="app-header__nav">
        <v-btn to="/popular" x-small class="app-header__nav__btn">Popular movies</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.app-header {
  background-color: green;
  width: 100%;
  min-height: 100px;
    &__container {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &__logo {
      height: 50%;
      width: 100px;
      &-img {
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
</style>
