import Vue from 'vue'
import VueRouter from 'vue-router'
import NowPlayingView from '@/views/NowPlayingView.vue'
import PopularMovieView from '@/views/PopularMovieView.vue'
import DetailsAboutMovieView from '@/views/DetailsAboutMovieView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nowPlayingMovies',
    component: NowPlayingView
  },
  {
    path: '/popular',
    name: 'popularMovieView',
    component: PopularMovieView
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
