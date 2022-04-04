<template>
  <v-container>
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">Top movies</div>
      <div v-for="movie in movies" :key="movie.id" class="card-movie">
        <img class="card-movie__img" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster">
        <div class="card-movie__descr">
          <div class="card-movie__descr-name">
            <span>Name of movie: </span>
            <span>{{ movie.original_title }}</span>
          </div>
          <div class="card-movie__descr-overview">
            <span>Overview: </span>
            <span>{{ movie.overview }}</span>
          </div>
        </div>
          <v-btn :to="{ name: 'detailsAboutMovie', params: { id: movie.id }}" rounded color="green">More</v-btn>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'MainView',
  created () {
    this.$store.dispatch('getTopMovies')
  },
  destroyed () {
    this.$store.commit('destroyTopMovies')
  },
  computed: {
    movies () {
      return this.$store.state.topMovies
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
