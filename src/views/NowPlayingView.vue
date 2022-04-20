<template>
  <div>
    <CardMovie :title="titleForMoviePage" :movies="nowPlayingMovies" />
    <Pagination />
  </div>
</template>

<script>
import CardMovie from '@/components/CardMovie.vue'
import Pagination from '@/components/AppPagination.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'NowPlayingView',
  components: {
    CardMovie,
    Pagination
  },
  created () {
    this.$store.dispatch('getNowPlayingMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', TITLE.nowPlayingMovies)
  },
  computed: {
    nowPlayingMovies () {
      return this.$store.state.nowPlayingMovies
    },
    titleForMoviePage () {
      return TITLE.nowPlayingMovies
    }
  }
}
</script>
