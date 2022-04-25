<template>
  <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @previous="previousPage"
      @next="nextPage"
      circle
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    actionType: {
      type: String
    }
  },
  computed: {
    currentPage: {
      get: function () {
        return this.$store.state.currentPage
      },
      set: function (value) {
        this.$store.commit('setPage', value)
        this.$store.dispatch(this.actionType, this.currentPage)
      }
    },
    totalPages () {
      return this.$store.state.totalPages
    }
  },
  methods: {
    previousPage () {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage--
        this.$store.dispatch(this.actionType, this.currentPage)
      }
    },
    nextPage () {
      if (this.currentPage < this.totalPages) {
        this.currentPage = this.currentPage++
        this.$store.dispatch(this.actionType, this.currentPage)
      }
    }
  }
}
</script>
