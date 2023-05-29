import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  return <div>Reviews: {id}</div>;
};

export default Reviews;
