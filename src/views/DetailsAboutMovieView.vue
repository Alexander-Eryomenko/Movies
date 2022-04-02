<template>
  <v-container>
    <div class="title">
      About film
    </div>
    <div class="descr">
      <div>
        <span>Budget:</span>
        <span>{{ dataAboutMovie.budget }}</span>
      </div>
      <div>
        <sapn>Home page:</sapn>
        <sapn>{{ dataAboutMovie.homepage }}</sapn>
      </div>
      <div>
        <span>Release date:</span>
        <span>{{ dataAboutMovie.release_date }}</span>
      </div>
      <div>
        <span>Revenue:</span>
        <span>{{ dataAboutMovie.revenue }}</span>
      </div>
      <div>
        <span>Runtime:</span>
        <span>{{ dataAboutMovie.runtime }}</span>
      </div>
      <div>
        <span>Status:</span>
        <span>{{ dataAboutMovie.status }}</span>
      </div>
      <div>
        <span>Tagline:</span>
        <span>{{ dataAboutMovie.tagline }}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'DetailsAboutMovie',
  created () {
    this.$store.dispatch('getDatailsOfTopMovie', this.$route.params.id)
  },
  computed: {
    dataAboutMovie () {
      return this.$store.state.detailsOfTopMovie || 'No descr'
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    margin-bottom: 10px;
  }
  .descr {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
