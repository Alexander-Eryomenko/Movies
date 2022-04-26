<template>
    <div>
      <div v-for="movie in movies" :key="movie.id" class="card-movie">
          <img v-if="movie.poster_path" class="card-movie__img" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster">
          <div v-if="movie.original_title && movie.overview" class="card-movie__descr">
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
    </div>
</template>

<script>
export default {
  name: 'MoviesList',
  props: {
    movies: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
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
    overflow: auto;
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
  @media (min-width: 300px) and (max-width: 960px) {
    .card-movie {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      &__img {
        height: 150px;
      }
      &__descr {
        font-size: 12px;
      }
    }
  }
</style>
