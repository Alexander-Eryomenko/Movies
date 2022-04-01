<template>
  <div>
    <div class="title">
      About film
    </div>
    <div class="descr">
      <div>Budget: {{ dataAboutFilm.budget }}</div>
      <div>Home page: {{ dataAboutFilm.homepage }}</div>
      <div>Release date: {{ dataAboutFilm.release_date }}</div>
      <div>Revenue: {{ dataAboutFilm.revenue }}</div>
      <div>Runtime: {{ dataAboutFilm.runtime }}</div>
      <div>Status: {{ dataAboutFilm.status }}</div>
      <div>Tagline: {{ dataAboutFilm.tagline }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsAboutFilm',
  created () {
    this.$store.dispatch('getDatailsOfTopFilm', this.$route.params.id)
  },
  computed: {
    dataAboutFilm () {
      return this.$store.state.detailsOfTopFilm
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
