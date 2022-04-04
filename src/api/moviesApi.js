import axios from 'axios'

export class MoviesApi {
  static apiKey = process.env.VUE_APP_API_KEY;
  static url = `https://api.themoviedb.org/3/movie/popular?api_key=${MoviesApi.apiKey}`
  static urlDetailsMovie = 'https://api.themoviedb.org/3/movie/'

  static getTopMovies () {
    return axios.get(MoviesApi.url).then(response => response.data.results)
  }

  static getDetailsOfMovie (id) {
    return axios.get(`${MoviesApi.urlDetailsMovie}${id}?api_key=${MoviesApi.apiKey}`).then(response => response.data)
  }
}
