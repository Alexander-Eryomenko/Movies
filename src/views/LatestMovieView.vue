<template>
  <div>

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
    this.$store.commit('destroyMoviesData', TITLE.latestMovie)
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
