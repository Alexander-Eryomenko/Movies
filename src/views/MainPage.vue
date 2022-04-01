/* eslint-disable vue/no-parsing-error */
<template>
  <v-container>
      <div v-for="film in films" :key="film.id" class="card-film">
      <div class="card-film__img">
        <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" alt="poster">
      </div>
      <div class="card-film__descr">
        <div class="card-film__descr__name">
          Name of film: {{ film.original_title }}
        </div>
        <div class="card-film__descr__overview">
          Overview: {{ film.overview }}
        </div>
      </div>
      <v-btn @click="getDetailsOfMovie(film.id)" rounded color="green">More</v-btn>
    </div>
  </v-container>
</template>
<script>

export default {
  name: 'MainPage',
  created () {
    // console.log('Route: ', this.$route)
    // console.log('Store: ', this.$store)
    this.getTopFilms()
  },
  destroyed () {
    this.$store.commit('destroyTopFilms')
  },
  computed: {
    films () {
      return this.$store.state.topFilms
    }
  },
  methods: {
    getTopFilms () {
      this.$store.dispatch('getBestFilms')
    },
    getDetailsOfMovie (id) {
      this.$router.push(`/detailsAboutFilm/${id}`)
      // this.$store.dispatch('getDatailsOfTopFilm', id)
    }
  }
}
</script>
<style scoped lang="scss">
  .card-film {
    height: 350px;
    padding: 0 15px;
    border-radius: 20px;
    background-color: #ECEFF1;
    display: flex;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    &__img {
      height: 90%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__descr {
      width: 50%;
      color: green;
      text-align: center;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      &__name {
        color: orange
      }
      &__overview {

      }
    }
  }
</style>
