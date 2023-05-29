import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/getMovies';
import MovieEl from '../components/MovieEl/MovieEl';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = () => {
      getMovieDetails(id)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(movieEl => {
          const {
            id,
            title,
            overview,
            genres,
            vote_average,
            release_date,
            poster_path,
          } = movieEl;
          setMovie({
            id,
            title,
            overview,
            genres,
            vote_average,
            release_date,
            poster_path,
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <button type="button">Go back</button>
      <MovieEl movie={movie} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
