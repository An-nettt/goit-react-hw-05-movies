import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  GoBackLink,
  AdditionalInfo,
  LinkList,
  MovieItem,
  StyledLink,
} from './MovieDetailsStyled';

import { getMovieDetails } from '../../services/getMovies';
import MovieEl from '../MovieEl/MovieEl';

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
      <GoBackLink to={goBackLocationRef.current}>Go back</GoBackLink>
      <MovieEl movie={movie} />
      <AdditionalInfo>
        <h4>Additional information</h4>
        <LinkList>
          <MovieItem>
            <StyledLink to="cast">Cast</StyledLink>
          </MovieItem>
          <MovieItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </MovieItem>
        </LinkList>
      </AdditionalInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};
