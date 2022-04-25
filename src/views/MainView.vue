<template>
  <div class="main-page">
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">{{titleForMoviePage}}</div>
    <MoviesList :movies="nowPlayingMovies" />
    <Pagination actionType="getNowPlayingMovies" />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import Pagination from '@/components/AppPagination.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'MainView',
  components: {
    MoviesList,
    Pagination
  },
  created () {
    this.$store.dispatch('getNowPlayingMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'nowPlayingMovies',
      reset: []
    })
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
