import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieDetails } from '../services/getMovies';
import MovieEl from '../components/MovieEl/MovieEl';

const MovieDetails = () => {
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/');

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
      <Link to={goBackLocationRef.current}>Go back</Link>
      <MovieEl movie={movie} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
