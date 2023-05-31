import PropTypes from 'prop-types';
import { ReviewsItem } from './ReviewsElStyled';

const ReviewsEl = ({ reviews }) => {
  return (
    <>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewsItem key={id}>
            <h3>Author: {author}</h3>
            <p>'{content}'</p>
          </ReviewsItem>
        );
      })}
    </>
  );
};

export default ReviewsEl;

ReviewsEl.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
