<template>
  <v-container>
    <div class="title">
      <span>
        {{ dataAboutMovie.original_title }}
      </span>
    </div>
    <div v-if="dataAboutMovie" class="descr">
      <img class="descr__img" :src="'https://image.tmdb.org/t/p/w500' + dataAboutMovie.backdrop_path" alt="moviePicture">
      <div>
        <span>Budget: </span>
        <span>{{ dataAboutMovie.budget }} $</span>
      </div>
      <div>
        <span>Home page: </span>
        <a class="descr__link" target="_blank" :href="dataAboutMovie.homepage">{{dataAboutMovie.original_title}}</a>
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
      return this.$store.state.detailsOfMovie
    }
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'detailsOfMovie',
      reset: {}
    })
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
    margin-bottom: 20px;
      &__img {
        display: block;
        width: 50%;
        height: 50%;
        border-radius: 20px;
        margin-bottom: 15px;
      }
    &__link {
      text-decoration: none;
    }
  }
</style>
