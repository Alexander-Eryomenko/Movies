<template>
  <v-app>
    <HeaderApp />
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
export default {
  name: 'App',
  components: {
    HeaderApp
  }
}
</script>
