<template>
  <v-container>
    <div class="title">
      <span>
        {{ dataAboutMovie.original_title }}
      </span>
    </div>
    <div v-if="dataAboutMovie" class="descr">
      <img v-if="imgURL" class="descr__img" :src="imgURL" alt="moviePicture">
      <div v-if="dataAboutMovie.budget">
        <span>Budget: </span>
        <span>{{ dataAboutMovie.budget }} $</span>
      </div>
      <div v-if="dataAboutMovie.homepage">
        <span>Home page: </span>
        <a class="descr__link" target="_blank" :href="dataAboutMovie.homepage">{{dataAboutMovie.original_title}}</a>
      </div>
      <div>
        <span>Release date: </span>
        <span>{{ dataAboutMovie.release_date }}</span>
      </div>
      <div v-if="dataAboutMovie.revenue">
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
      type: [String, Number],
      require: true
    }
  },
  created () {
    this.$store.dispatch('getDatailsOfTopMovie', this.id)
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'detailsOfMovie',
      reset: {}
    })
  },
  computed: {
    dataAboutMovie () {
      return this.$store.state.detailsOfMovie
    },
    imgURL () {
      const configImage = this.$store.state.configurationsForImages
      if (configImage.base_url && configImage.backdrop_sizes && this.dataAboutMovie.backdrop_path) {
        return `${configImage.base_url}${configImage.backdrop_sizes[1]}${this.dataAboutMovie.backdrop_path}`
      }
      return null
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
