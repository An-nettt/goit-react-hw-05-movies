const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/';
const API_KEY = '4b1c3558eb2d79dd671ee6aeceadbb9c';

export const getPictures = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&api_key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
