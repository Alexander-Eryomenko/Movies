<template>
  <div>
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">{{titleForMoviePage}}</div>
  </div>
</template>

<script>
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'LatestMovieView',
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
