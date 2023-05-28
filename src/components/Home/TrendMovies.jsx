// import { Link } from 'react-router-dom';
// import { Container } from './HomeStyled';

const TrendMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li key={id}>
            <p>{title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendMoviesList;
