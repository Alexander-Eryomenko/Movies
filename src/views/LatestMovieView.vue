<template>
  <div>
    <CardMovie :title="titleForMoviePage" :movies="latestMovie"/>
  </div>
</template>

<script>
import CardMovie from '@/components/CardMovie.vue'

import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'LatestMovieView',
  components: {
    CardMovie,

  },
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
