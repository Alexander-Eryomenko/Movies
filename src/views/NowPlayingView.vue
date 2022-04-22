<template>
  <CardMovie :title="titleForMoviePage" :movies="popularMovies" />
</template>

<script>
import CardMovie from '@/components/CardMovie.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'NowPlayingView',
  components: {
    CardMovie
  },
  created () {
    this.$store.dispatch('getNowPlayingMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', TITLE.nowPlayingMovies)
  },
  computed: {
    popularMovies () {
      return this.$store.state.nowPlayingMovies
    },
    titleForMoviePage () {
      return TITLE.nowPlayingMovies
    }
  }
}
</script>
