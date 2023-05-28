import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

import { getTrendingMovies } from '../services/getTrending';
import TrendMoviesList from '../components/Home/TrendMovies';

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
          return movies.results;
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
    <main>
      <h1>Trending today</h1>
      <TrendMoviesList movies={movies} />
    </main>
  );
};

export default Home;
