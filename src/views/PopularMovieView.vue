<template>
  <div>
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">{{titleForMoviePage}}</div>
    <MoviesList :movies="popularMovies" />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'PopularMovieView',
  components: {
    MoviesList
  },
  created () {
    this.$store.dispatch('getPopularMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'popularMovies',
      reset: []
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
