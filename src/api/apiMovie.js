import axios from 'axios'

export class ApiMovies {
  static apiKey = '0b4531aff274b4a3d4d6602140c1450b';
  static url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiMovies.apiKey}`
  static urlDetailsMovie = 'https://api.themoviedb.org/3/movie/'

  static getTopMovies () {
    return axios.get(ApiMovies.url).then(response => response.data.results)
  }

  static getDetailsOfMovie (id) {
    axios.get(`${ApiMovies.urlDetailsMovie}${id}?api_key=${ApiMovies.apiKey}`).then(response => response.data)
  }
}
