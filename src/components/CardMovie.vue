<template>
  <v-container>
    <div class="title text-center text-h4 font-weight-bold green--text text--darken-3">{{title}}</div>
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
  name: 'CardMovie',
  props: {
    movies: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
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
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s linear;
    -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.2);
      &:hover {
      transform: scale(1.01);
      }
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
