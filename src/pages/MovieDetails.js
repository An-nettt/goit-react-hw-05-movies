import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/getTrending';
import MovieEl from '../components/MovieEl/MovieEl';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = () => {
      getMovieDetails(id)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(movieEl => {
          const {
            id,
            original_title,
            overview,
            genres,
            vote_average,
            release_date,
            poster_path,
          } = movieEl;
          setMovie({
            id,
            original_title,
            overview,
            genres,
            vote_average,
            release_date,
            poster_path,
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchDetails();
  }, [id]);

  return (
    <main>
      <MovieEl movie={movie} />
    </main>
  );
};

export default MovieDetails;
