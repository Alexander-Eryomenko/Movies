import Vue from 'vue'
import Vuex from 'vuex'
import { MoviesApi } from '@/api/moviesApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    popularMovies: [],
    nowPlayingMovies: [],
    detailsOfMovie: {},
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
    setPopularMovies (state, data) {
      state.popularMovies = data.results
      state.currentPage = data.page
      state.totalPages = data.total_pages
      state.totalResults = data.total_results
    },
    setNowPlayingMovies (state, data) {
      state.nowPlayingMovies = data.results
      state.currentPage = data.page
      state.totalPages = data.total_pages
      state.totalResults = data.total_results
    },
    setDetailsOfMovie (state, payload) {
      state.detailsOfMovie = payload
    },
    setPage (state, payload) {
      state.currentPage = payload
    }
  },
  actions: {
    getPopularMovies ({ commit }, page) {
      MoviesApi.getPopularMovies(page)
        .then(data => {
          commit('setPopularMovies', data)
        })
        .catch(err => console.log(err))
    },
    getNowPlayingMovies ({ commit }, page) {
      MoviesApi.getNowPlayingMovie(page)
        .then(data => {
          commit('setNowPlayingMovies', data)
        })
    },
    getDatailsOfMovie ({ commit }, id) {
      MoviesApi.getDetailsOfMovie(id)
        .then(data => {
          commit('setDetailsOfMovie', data)
        })
        .catch(err => console.log(err))
    }
  }
})
