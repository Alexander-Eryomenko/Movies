<template>
  <MoviesList :movies="latestMovie"/>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'LatestMovieView',
  components: {
    MoviesList
  },
  created () {
    this.$store.dispatch('getLatestMovie')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'latestMovie',
      reset: {}
    })
  },
  computed: {
    latestMovie () {
      return this.$store.state.latestMovie
    },
    titleForMoviePage () {
      return TITLE.latestMovie
    }
  }
}
</script>
