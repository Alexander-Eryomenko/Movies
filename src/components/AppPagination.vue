<template>
    <div class="app-pagination">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        total-visible="7"
        @previous="previousPage"
        @next="nextPage"
        color="success"
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

<style scoped lang="scss">
  .app-pagination {
    animation: hide-pagination 1s;
  }
  @keyframes hide-pagination {
    0% {
      visibility: hidden;
    }

    90% {
      visibility: hidden;
    }

    100% {
      visibility: visible;
    }
  }
</style>
