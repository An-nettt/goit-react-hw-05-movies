import PropTypes from 'prop-types';
import {
  CastItemEl,
  Photo,
  NameEl,
  CharacterEl,
  CharacterNameEl,
} from './CastElStyled';
import noPhoto from 'images/no-photo.jpg';

const CastEl = ({ cast }) => {
  return (
    <>
      {cast.map(({ id, name, character, profile_path }) => {
        const img = profile_path
          ? `https://image.tmdb.org/t/p/w200${profile_path}`
          : noPhoto;
        return (
          <CastItemEl key={id}>
            <Photo src={img} alt={name} />
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

// {cast.profile_path ? (
//                 src = { noPhoto }

//       ) : (
//         src={`https://image.tmdb.org/t/p/w200${profile_path}`}
//       )}
