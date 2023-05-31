import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, MovieList, MovieTitle } from './MoviesListStyled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ id, title }) => {
        return (
          <StyledLink key={id} to={`/movies/${id}`} state={{ from: location }}>
            <MovieTitle>{title}</MovieTitle>
          </StyledLink>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
