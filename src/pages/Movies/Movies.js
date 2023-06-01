import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Loader from '../../components/Loader/Loader';
import { Input, Button } from './MoviesStyled';

import { getSearchMovie } from '../../services/getMovies';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const handleSearch = element => {
    setSearchParams({ query: element.querySearch });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit(handleSearch)}>
        <Input
          placeholder="Enter the name of the movie..."
          {...register('querySearch')}
          defaultValue=""
        />

        {errors.search && <p>This field is required</p>}
        <Button type="submit">Search</Button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
