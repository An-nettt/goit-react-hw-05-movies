// import { Container } from './HomeStyled';

const MovieEl = ({ movie }) => {
  // const { id, original_title, overview, genres } = movie;
  return (
    <div key={movie.id}>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.genres}</p>
    </div>
  );
};

export default MovieEl;
