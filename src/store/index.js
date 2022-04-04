import Vue from 'vue'
import Vuex from 'vuex'
import { MoviesApi } from '@/api/moviesApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    topMovies: [],
    detailsOfTopMovie: {}
  },
  getters: {
    getMovieById (state) {
      return function (id) {
        return state.topMovies.find(item => item.id === id)
      }
    }
  },
  mutations: {
    setLoadingState (state) {
      state.isLoading = !state.isLoading
    },
    destroyTopMovies (state) {
      state.topMovies = []
    },
    setTopMovies (state, payload) {
      state.topMovies = payload
    },
    setDetailsOfTopMovie (state, payload) {
      state.detailsOfTopMovie = payload
    }
  },
  actions: {
    getTopMovies ({ commit }) {
      MoviesApi.getTopMovies()
        .then(data => {
          commit('setTopMovies', data)
        })
        .catch(err => console.log(err))
    },
    getDatailsOfTopMovie ({ commit }, id) {
      MoviesApi.getDetailsOfMovie(id)
        .then(data => {
          commit('setDetailsOfTopMovie', data)
        })
        .catch(err => console.log(err))
    }
  }
})
