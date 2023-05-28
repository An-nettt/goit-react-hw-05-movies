// import { Container } from './HomeStyled';

const MovieEl = ({ movie }) => {
  // console.log(movie);
  const {
    id,
    original_title,
    overview,
    vote_average,
    release_date,
    poster_path,
    genres,
  } = movie;

  const score = vote_average * 10;

  const year = new Date(Date.parse(release_date)).getFullYear();

  console.log(genres);

  const genre = () =>
    genres.map(genre => {
      return genre.name;
    });

  console.log(genre);

  // setGenresElement(genresEl);
  // console.log(genresElement);

  return (
    <div key={id}>
      <h1>
        {original_title} ({year})
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        alt={original_title}
      />
      <p>User Score: {score}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {/* <p>{genre.join(', ')}</p> */}
    </div>
  );
};

export default MovieEl;
