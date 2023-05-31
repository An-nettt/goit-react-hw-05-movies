import PropTypes from 'prop-types';
import {
  CastItemEl,
  NameEl,
  CharacterEl,
  CharacterNameEl,
} from './CastElStyled';

const CastEl = ({ cast }) => {
  return (
    <>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItemEl key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <NameEl>{name}</NameEl>
            <CharacterEl>
              Character: <CharacterNameEl>{character}</CharacterNameEl>
            </CharacterEl>
          </CastItemEl>
        );
      })}
    </>
  );
};

export default CastEl;

CastEl.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};
