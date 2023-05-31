import PropTypes from 'prop-types';
import {
  Card,
  Poster,
  Details,
  Title,
  Scores,
  ScoresNumber,
  GenresEl,
  Overview,
} from './MovieElStyled';

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
    <Card key={id}>
      <Poster
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
      />

      <Details>
        <Title>
          {title} ({year})
        </Title>
        <Scores>
          User Score:<ScoresNumber>{score}%</ScoresNumber>
        </Scores>
        <h3>Genres</h3>
        <GenresEl>
          {genres && genres.map(({ name }) => <p key={name}>{name}</p>)}
        </GenresEl>
        <h3>Overview</h3>
        <Overview>{overview}</Overview>
      </Details>
    </Card>
  );
};

export default MovieEl;

MovieEl.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
