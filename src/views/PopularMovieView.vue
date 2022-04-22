<template>
  <CardMovie :title="titleForMoviePage" :movies="popularMovies" />
</template>

<script>
import CardMovie from '@/components/CardMovie.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'PopularMovieView',
  components: {
    CardMovie
  },
  created () {
    this.$store.dispatch('getPopularMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', TITLE.popularMovies)
  },
  computed: {
    popularMovies () {
      return this.$store.state.popularMovies
    },
    titleForMoviePage () {
      return TITLE.popularMovies
    }
  }
}
</script>
