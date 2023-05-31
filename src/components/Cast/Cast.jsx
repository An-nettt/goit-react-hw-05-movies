import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { CastList } from './CastStyled';

import { getCast } from '../../services/getMovies';
import CastEl from '../CastEl/CastEl';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = () => {
      getCast(id)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(castEl => {
          return castEl.cast.map(({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          }));
        })
        .then(castEl => {
          setCast(castEl);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchCast();
  }, [id]);

  return (
    <CastList>
      <CastEl cast={cast} />
    </CastList>
  );
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};
