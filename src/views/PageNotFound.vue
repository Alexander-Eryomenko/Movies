<template>
  <v-container class="d-flex justify-center mt-4">
    <div>Page not found: https://movie<span>{{ getQuery }}</span></div>
  </v-container>
</template>
<script>
export default {
  name: 'PageNotFound',
  computed: {
    getQuery () {
      const query = this.$route.path
      return query
    }
  }
}
</script>
<style lang="scss" scoped>
  span {
    color: orange;
  }
</style>
