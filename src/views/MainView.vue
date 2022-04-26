<template>
  <div class="main-page">
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">{{titleForMoviePage}}</div>
    <MoviesList :movies="nowPlayingMovies" />
    <AppPagination v-if="$store.state.nowPlayingMovies" actionType="getNowPlayingMovies" />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import AppPagination from '@/components/AppPagination.vue'
import { TITLE } from '@/constants/titleConstants'

export default {
  name: 'MainView',
  components: {
    MoviesList,
    AppPagination
  },
  created () {
    this.$store.dispatch('getNowPlayingMovies')
  },
  destroyed () {
    this.$store.commit('destroyMoviesData', {
      propState: 'nowPlayingMovies',
      reset: null
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

<style scoped lang="scss">
  .title {
    margin-bottom: 12px;
  }
</style>
