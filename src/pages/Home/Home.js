import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Title } from './HomeStyled';

import { getTrendingMovies } from '../../services/getMovies';
import MoviesList from '../../components/MoviesList/MoviesList';

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
      <Title> Trending today</Title>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};
