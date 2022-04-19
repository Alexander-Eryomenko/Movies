<template>
  <v-container class="d-flex justify-center mt-4">
    <div class="text">{{ getInfoAboutUrl }}</div>
  </v-container>
</template>

<script>
export default {
  name: 'PageNotFound',
  computed: {
    getInfoAboutUrl () {
      return `Page not found: https://movie${this.$route.path}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .text {
    color: orange;
  }
</style>
