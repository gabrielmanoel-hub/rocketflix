import axios from 'axios'

export const BASE_URL = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
})

export const IMG_URL = 'https://image.tmdb.org/t/p/w500'


export const API_KEY = 'e17ef10d72c82a854a1640bb49b7bfef'
