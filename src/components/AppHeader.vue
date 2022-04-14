<template>
  <div class="app-header">
    <div class="header">
      <router-link class="header__logo" to="/">
        <img class="header__logo-img" src="@/assets/logo.svg" alt="logo">
      </router-link>
      <div class="header__nav">
        <v-btn to="/raiting-movies" x-small class="header__nav__btn">Raiting films</v-btn>
        <v-btn to="/some-movies" x-small class="header__nav__btn">Some films</v-btn>
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
}
.header {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
