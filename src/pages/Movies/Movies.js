import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GoBackLink } from './MoviesStyled';

import { getSearchMovie } from '../../services/getMovies';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [queryEl, setQueryEl] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const newQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearchMovie = () => {
      getSearchMovie(newQuery)
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
    fetchSearchMovie();
  }, [newQuery]);

  const handleQueryChange = event => {
    setQueryEl(event.currentTarget.value.toLowerCase());
  };

  const handleSearch = () => {
    setSearchParams({ query: queryEl });
  };

  return (
    <div>
      <input
        type="text"
        value={queryEl}
        placeholder="Enter the name of the movie..."
        onChange={handleQueryChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
