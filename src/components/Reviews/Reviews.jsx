import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { ReviewsList } from './ReviewsStyled';

import { getReviews } from '../../services/getMovies';
import ReviewsEl from '../ReviewsEl/ReviewsEl';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = () => {
      getReviews(id)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(reviewsEl => {
          return reviewsEl.results.map(({ id, author, content }) => ({
            id,
            author,
            content,
          }));
        })
        .then(reviewsEl => {
          setReviews(reviewsEl);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchReviews();
  }, [id]);

  return (
    <ReviewsList>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ReviewsEl reviews={reviews} />
      )}
    </ReviewsList>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};
