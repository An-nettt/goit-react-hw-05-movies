import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  return <div>Cast: {id}</div>;
};

export default Cast;
