import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Title } from './HomeStyled';

import { getTrendingMovies } from 'services/getMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = () => {
      setIsLoading(true);
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
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchTrending();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <Title> Trending today</Title>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};
