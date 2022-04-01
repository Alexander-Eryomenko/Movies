import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsAboutFilm from '@/views/DetailsAboutFilm.vue'
import AboutView from '../views/AboutView.vue'
import MainPage from '../views/MainPage.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/raiting-films',
    name: 'raitingPage',
    component: HomeView
  },
  {
    path: '/some-films',
    name: 'someFilms',
    component: AboutView
  },
  {
    path: '/detailsAboutFilm/:id',
    name: 'detailsAboutFilm',
    component: DetailsAboutFilm
  },
  {
    path: '*',
    name: 'pageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
