import Vue from 'vue'
import Vuex from 'vuex'
import { MoviesApi } from '@/api/moviesApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    popularMovies: [],
    nowPlayingMovies: [],
    latestMovie: {},
    detailsOfMovie: {}
  },
  mutations: {
    setLoadingStatus (state) {
      state.isLoading = !state.isLoading
    },
    destroyMoviesData (state, { propState, reset }) {
      state[propState] = reset
    },
    setPopularMovies (state, payload) {
      state.popularMovies = payload
    },
    setNowPlayingMovies (state, payload) {
      state.nowPlayingMovies = payload
    },
    setLatestMovies (state, payload) {
      state.latestMovie = payload
    },
    setDetailsOfMovie (state, payload) {
      state.detailsOfMovie = payload
    }
  },
  actions: {
    getPopularMovies ({ commit }) {
      MoviesApi.getPopularMovies()
        .then(data => {
          commit('setPopularMovies', data)
        })
        .catch(err => console.log(err))
    },
    getNowPlayingMovies ({ commit }) {
      MoviesApi.getNowPlayingMovie()
        .then(data => {
          commit('setNowPlayingMovies', data)
        })
        .catch(err => console.log(err))
    },
    getLatestMovie ({ commit }) {
      MoviesApi.getLatestMovie()
        .then(data => {
          commit('setLatestMovies', data)
        })
        .catch(err => console.log(err))
    },
    getDatailsOfTopMovie ({ commit }, id) {
      MoviesApi.getDetailsOfMovie(id)
        .then(data => {
          commit('setDetailsOfMovie', data)
        })
        .catch(err => console.log(err))
    }
  }
})
