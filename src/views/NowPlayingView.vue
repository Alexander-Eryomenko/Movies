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

<style scoped lang="scss">
.title {
  margin-bottom: 20px;
}
  .card-movie {
    height: 350px;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: #ECEFF1;
    display: flex;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    &__img {
      border-radius: 10px;
      height: 90%;
      display: block;
      object-fit: contain;
      overflow: hidden;
    }
    &__descr {
      width: 50%;
      color: ForestGreen;
      text-align: center;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      &-name {
        color: LightSlateGrey;
      }
    }
  }
</style>
