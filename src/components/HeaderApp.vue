<template>
  <div class="wrapper-header">
      <div class="header">
        <router-link class="header__logo" to="/">
          <img class="header__logo-img" src="@/assets/logo.svg" alt="logo">
        </router-link>
      <div class="header__nav">
        <v-btn to="/popular" x-small class="header__nav__btn">Popular Movies</v-btn>
        <v-btn to="/some-movies" x-small class="header__nav__btn">Some films</v-btn>
      </div>
    </div>
    <BurgerMenu />
  </div>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue'

export default {
  name: 'HeaderApp',
  components: {
    BurgerMenu
  }

}
</script>
<style lang="scss" scoped>
.wrapper-header {
  background-color: green;
  width: 100%;
  min-height: 100px;
  position: relative;
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
  @media (min-width: 300px) and (max-width: 960px) {
    .header__nav {
      display: none;
    }
}
}
</style>
