import { Link } from 'react-router-dom';
// import { Container } from './HomeStyled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Link key={id} to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesList;
