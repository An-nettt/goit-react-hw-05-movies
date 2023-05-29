// import { Container } from './HomeStyled';

const CastEl = ({ cast }) => {
  return (
    <>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </>
  );
};

export default CastEl;
