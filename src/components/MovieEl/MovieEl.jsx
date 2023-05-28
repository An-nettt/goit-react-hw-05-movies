// import { Container } from './HomeStyled';

const MovieEl = ({ movie }) => {
  const { id, original_title, overview } = movie;
  return (
    <div key={id}>
      <h1>{original_title}</h1>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {/* <p>{movie.genres}</p> */}
    </div>
  );
};

export default MovieEl;
