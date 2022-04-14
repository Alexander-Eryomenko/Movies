import axios from 'axios'

export class MoviesApi {
  static apiKey = process.env.VUE_APP_API_KEY;
  static mainURL = 'https://api.themoviedb.org/3/movie'
  static nowPlayingMoviesURL = `${MoviesApi.mainURL}/now_playing?api_key=${MoviesApi.apiKey}`
  static latestMovieURL = `${MoviesApi.mainURL}/latest?api_key=${MoviesApi.apiKey}`
  static popularMovieURL = `${MoviesApi.mainURL}/popular?api_key=${MoviesApi.apiKey}`

  static getNowPlayingMovie () {
    return axios.get(MoviesApi.nowPlayingMoviesURL).then(response => response.data.results)
  }

  static getLatestMovie () {
    return axios.get(MoviesApi.latestMovieURL).then(response => response.data)
  }

  static getPopularMovies () {
    return axios.get(MoviesApi.popularMovieURL).then(response => response.data.results)
  }

  static getDetailsOfMovie (id) {
    return axios.get(`${MoviesApi.mainURL}/${id}?api_key=${MoviesApi.apiKey}`).then(response => response.data)
  }

  static getVideoOfMovie (id) {
    return axios.get(`${MoviesApi.mainURL}/${id}/videos?api_key=${MoviesApi.apiKey}`).then(response => response.data.results)
  }
}
