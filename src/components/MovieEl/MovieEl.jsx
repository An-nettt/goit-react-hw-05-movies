// import { Container } from './HomeStyled';

const MovieEl = ({ movie }) => {
  const {
    id,
    title,
    overview,
    vote_average,
    release_date,
    poster_path,
    genres,
  } = movie;

  const score = Math.round(vote_average * 10);

  const year = new Date(Date.parse(release_date)).getFullYear();

  return (
    <div key={id}>
      <h1>
        {title} ({year})
      </h1>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <p>User Score: {score}%</p>
      <h3>Genres</h3>
      <>{genres && genres.map(({ name }) => <p key={name}>{name}</p>)}</>
      <h2>Overview</h2>
      <p>{overview}</p>
    </div>
  );
};

export default MovieEl;
