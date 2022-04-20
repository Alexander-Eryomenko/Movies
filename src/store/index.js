import Vue from 'vue'
import Vuex from 'vuex'
import { TITLE } from '@/constants/titleConstants'
import { MoviesApi } from '@/api/moviesApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    popularMovies: [],
    nowPlayingMovies: [],
    latestMovie: {},
    detailsOfMovie: {},
    videoOfMovie: {}
  },
  mutations: {
    setLoadingStatus (state) {
      state.isLoading = !state.isLoading
    },
    destroyMoviesData (state, payload) {
      switch (payload) {
        case TITLE.popularMovies:
          state.popularMovies = []
          break
        case TITLE.nowPlayingMovies:
          state.nowPlayingMovies = []
          break
        case TITLE.latestMovie:
          state.latestMovie = {}
          break
        case TITLE.detailsAboutMovie:
          state.detailsOfMovie = {}
          break
      }
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
    },
    setVideoOfMovie (state, payload) {
      state.videoOfMovie = payload
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
    getDatailsOfMovie ({ commit }, id) {
      MoviesApi.getDetailsOfMovie(id)
        .then(data => {
          commit('setDetailsOfMovie', data)
        })
        .catch(err => console.log(err))
    },
    getVideoOfMovie ({ commit }, id) {
      MoviesApi.getVideoOfMovie(id)
        .then(data => {
          commit('setVideoOfMovie', data)
        })
        .catch(err => console.log(err))
    }
  }
})
