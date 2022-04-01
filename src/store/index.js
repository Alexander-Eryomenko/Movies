import Vue from 'vue'
import Vuex from 'vuex'
import { ApiMovies } from '@/api/apiMovie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    topFilms: [],
    detailsOfTopFilm: {}
  },
  getters: {
  },
  mutations: {
    isLoadingStatus (state) {
      state.isLoading = !state.isLoading
    },
    destroyTopFilms (state) {
      state.topFilms = []
    },
    loadTopFilms (state, payload) {
      state.topFilms = payload.data
    },
    loadDetailsOfTopFilms (state, payload) {
      console.log(payload)
      state.detailsOfTopFilm = payload.data
    }
  },
  actions: {
    getBestFilms ({ commit }) {
      ApiMovies.getTopMovies()
        .then(data => {
          commit('loadTopFilms', { data })
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Finally getBestFilms'))
    },
    getDatailsOfTopFilm ({ commit }, id) {
      ApiMovies.getDetailsOfMovie(id)
        .then(data => {
          commit('loadDetailsOfTopFilms', { data })
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Finally getDetailsOfBestFilms'))
    }
  },
  modules: {
  }
})
