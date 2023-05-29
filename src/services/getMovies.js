const API_KEY = '4b1c3558eb2d79dd671ee6aeceadbb9c';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND = 'trending/movie/day';
const MOVIE_DETAILS = 'movie/';
const CAST = '/credits';
const REVIEWS = '/reviews';
const SEARCH = 'search/movie?query=';

export const getTrendingMovies = () => {
  return fetch(`${BASE_URL}${TREND}?api_key=${API_KEY}`);
};

export const getMovieDetails = id => {
  return fetch(`${BASE_URL}${MOVIE_DETAILS}${id}?api_key=${API_KEY}`);
};

export const getCast = id => {
  return fetch(`${BASE_URL}${MOVIE_DETAILS}${id}${CAST}?api_key=${API_KEY}`);
};

export const getReviews = id => {
  return fetch(`${BASE_URL}${MOVIE_DETAILS}${id}${REVIEWS}?api_key=${API_KEY}`);
};

export const getSearchMovie = query => {
  return fetch(`${BASE_URL}${SEARCH}${query}&api_key=${API_KEY}`);
};
