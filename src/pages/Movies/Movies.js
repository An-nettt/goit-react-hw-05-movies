import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import { Input, Button } from './MoviesStyled';

import { getSearchMovie } from '../../services/getMovies';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [queryEl, setQueryEl] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const newQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearchMovie = () => {
      setIsLoading(true);
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
        })
        .finally(() => {
          setIsLoading(false);
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
      {isLoading && <Loader />}
      <Input
        type="text"
        value={queryEl}
        placeholder="Enter the name of the movie..."
        onChange={handleQueryChange}
      />
      <Button type="button" onClick={handleSearch}>
        Search
      </Button>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
