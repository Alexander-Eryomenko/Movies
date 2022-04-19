import Vue from 'vue'
import VueRouter from 'vue-router'
import RaitingMoviesView from '@/views/RaitingMoviesView.vue'
import DetailsAboutMovieView from '@/views/DetailsAboutMovieView.vue'
import SomeMoviesView from '@/views/SomeMoviesView.vue'
import MainView from '@/views/MainView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainView',
    component: MainView
  },
  {
    path: '/raiting-movies',
    name: 'raitingMoviesView',
    component: RaitingMoviesView
  },
  {
    path: '/some-movies',
    name: 'someMoviesView',
    component: SomeMoviesView
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
