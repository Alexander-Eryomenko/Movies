import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView.vue'
import PopularMoviesView from '@/views/PopularMoviesView.vue'
import DetailsAboutMovieView from '@/views/DetailsAboutMovieView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nowPlayingMovies',
    component: MainView
  },
  {
    path: '/popular',
    name: 'popularMovieView',
    component: PopularMoviesView
  },
  {
    path: '/details/:id',
    name: 'detailsAboutMovie',
    component: DetailsAboutMovieView,
    props: true
  },
  {
    path: '*',
    name: 'notFoundView',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
