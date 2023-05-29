import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

import { getTrendingMovies } from '../services/getMovies';
import TrendMoviesList from '../components/TrendMoviesList/TrendMoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = () => {
      getTrendingMovies()
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(movies => {
          return movies.results.map(({ id, title }) => ({
            id,
            title,
          }));
        })
        .then(movies => {
          setMovies(movies);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendMoviesList movies={movies} />
    </div>
  );
};

export default Home;
