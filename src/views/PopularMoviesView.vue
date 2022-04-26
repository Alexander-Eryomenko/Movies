<template>
  <div class="popular-movies">
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">{{titleForMoviePage}}</div>
    <MoviesList :movies="popularMovies" />
    <AppPagination v-if="popularMovies" actionType="getPopularMovies"/>
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import AppPagination from '@/components/AppPagination.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'PopularMovieView',
  components: {
    MoviesList,
    AppPagination
  },
  created () {
    this.$store.dispatch('getPopularMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'popularMovies',
      reset: null
    })
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
