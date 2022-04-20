<template>
  <div class="app-header">
    <div class="app-header__container">
      <router-link class="app-header__logo" to="/">
        <img class="app-header__logo-img" src="@/assets/logo.svg" alt="logo">
      </router-link>
      <div class="app-header__nav">
        <v-btn to="/popular" x-small class="app-header__nav__btn">Popular movies</v-btn>
        <v-btn to="/some-movies" x-small class="app-header__nav__btn">Some films</v-btn>
      </div>
    </div>
    <BurgerMenu />
  </div>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue'

export default {
  name: 'AppHeader',
  components: {
    BurgerMenu
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables/variables.scss";

.app-header {
  background-color: $greenColor;
  width: 100%;
  min-height: 100px;
  position: relative;
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

@media (min-width: 300px) and (max-width: 960px) {
  .app-header__nav {
    display: none;
  }
}
</style>
