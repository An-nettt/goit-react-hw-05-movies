const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND = 'trending/movie/day';
const API_KEY = '4b1c3558eb2d79dd671ee6aeceadbb9c';

export const getTrendingMovies = () => {
  return fetch(`${BASE_URL}${TREND}?api_key=${API_KEY}`);
};
