// import { Container } from './HomeStyled';

const ReviewsEl = ({ reviews }) => {
  return (
    <>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>'{content}'</p>
          </li>
        );
      })}
    </>
  );
};

export default ReviewsEl;
