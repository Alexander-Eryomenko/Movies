<template>
  <div>
    <div @click="showMenuForMobile" :class="{'overlay': toogleMenu}"></div>
    <div @click="showMenuForMobile" class="burger-menu-btn" :class="{'hide-burger-btn': toogleMenu}" >
        <span></span>
    </div>
    <div :class="{'aside-show-menu': toogleMenu}" class="aside-menu">
        <div class="btn-container">
          <v-btn to="/" x-small class="header__nav__btn">Main page</v-btn>
          <v-btn to="/popular" x-small class="header__nav__btn">Popular Movies</v-btn>
          <v-btn to="/some-movies" x-small class="header__nav__btn">Some films</v-btn>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data () {
    return {
      toogleMenu: false
    }
  },
  methods: {
    showMenuForMobile () {
      console.log(this.toogleMenu)
      this.toogleMenu = !this.toogleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
  .burger-menu-btn {
  display: none;
  span {
    width: 20px;
    height: 2px;
    display: block;
    background-color: #000;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;

    &:before, &:after{
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 2px;
      background-color: #000;
    }
    &:before{
      bottom: 6px;
    }
    &:after{
      top: 6px;
    }
  }
}
.aside-menu {
  width: 250px;
  position: absolute;
  background-color: yellow;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 20px;
  display: flex;
  justify-content: center;
  transition: 0.3s all linear;
  transform: translateX(-250px);
  .btn-container {
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 160px;
  }
}
.aside-show-menu {
  transform: translateX(250px);
}
.hide-burger-btn {
  display: none;
}
.overlay {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(117, 169, 83, 0.4);
  z-index: 1;
}
@media (min-width: 300px) and (max-width: 960px) {
  .burger-menu-btn {
    display: block;
  }
}
</style>
