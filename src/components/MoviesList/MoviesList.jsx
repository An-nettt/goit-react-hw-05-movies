import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Container } from './HomeStyled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
