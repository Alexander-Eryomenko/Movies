<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
.title {
  margin-bottom: 12px;
  animation: fade 0.5s linear;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
