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
    detailsOfMovie: {},
    configurationsForImages: {},
    currentPage: null,
    totalPages: null,
    totalResults: null
  },
  mutations: {
    setLoadingStatus (state) {
      state.isLoading = !state.isLoading
    },
    destroyMoviesData (state, { propState, reset }) {
      state[propState] = reset
    },
    setPopularMovies (state, { data, currentPage, totalPages, totalResults }) {
      state.popularMovies = data
      state.currentPage = currentPage
      state.totalPages = totalPages
      state.totalResults = totalResults
    },
    setNowPlayingMovies (state, { data, currentPage, totalPages, totalResults }) {
      state.nowPlayingMovies = data
      state.currentPage = currentPage
      state.totalPages = totalPages
      state.totalResults = totalResults
    },
    setLatestMovies (state, payload) {
      state.latestMovie = payload
    },
    setDetailsOfMovie (state, payload) {
      state.detailsOfMovie = payload
    },
    setConfigurationsForImages (state, payload) {
      state.configurationsForImages = payload
    },
    setPage (state, payload) {
      state.currentPage = payload
    }
  },
  actions: {
    getPopularMovies ({ commit }, page) {
      MoviesApi.getPopularMovies(page)
        .then(data => {
          commit('setPopularMovies', {
            data: data.results,
            currentPage: data.page,
            totalPages: data.total_pages,
            totalResults: data.total_results
          })
        })
        .catch(err => console.log(err))
    },
    getNowPlayingMovies ({ commit }, page) {
      MoviesApi.getNowPlayingMovie(page)
        .then(data => {
          commit('setNowPlayingMovies', {
            data: data.results,
            currentPage: data.page,
            totalPages: data.total_pages,
            totalResults: data.total_results
          })
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
    },
    getConfigurationsForImages ({ commit }) {
      MoviesApi.getConfigurationsForImages()
        .then(data => commit('setConfigurationsForImages', data))
    }
  }
})
