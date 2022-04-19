<template>
  <v-container>
    <div class="title">
      About film
    </div>
    <div v-if="dataAboutMovie" class="descr">
      <div>
        <span>Budget: </span>
        <span>{{ dataAboutMovie.budget }} $</span>
      </div>
      <div>
        <span>Home page: </span>
        <a class="link" target="_blank" :href="dataAboutMovie.homepage">{{dataAboutMovie.original_title}}</a>
      </div>
      <div>
        <span>Release date: </span>
        <span>{{ dataAboutMovie.release_date }}</span>
      </div>
      <div>
        <span>Revenue: </span>
        <span>{{ dataAboutMovie.revenue }} $</span>
      </div>
      <div>
        <span>Runtime: </span>
        <span>{{ dataAboutMovie.runtime }} minutes</span>
      </div>
      <div>
        <span>Status: </span>
        <span>{{ dataAboutMovie.status }}</span>
      </div>
      <div>
        <span>Tagline: </span>
        <span>{{ dataAboutMovie.tagline }}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'DetailsAboutMovie',
  props: {
    id: {
      type: Number,
      require: true
    }
  },
  created () {
    this.$store.dispatch('getDatailsOfTopMovie', this.id)
  },
  computed: {
    dataAboutMovie () {
      return this.$store.state.detailsOfTopMovie
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
  .link {
    text-decoration: none;
  }
</style>
