import { ThreeDots } from 'react-loader-spinner';
import { ThreeDotsEl } from './LoaderStyled';

const Loader = () => {
  return (
    <ThreeDotsEl>
      <ThreeDots
        height="80"
        width="80"
        radius="5"
        color="#0a0a23"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </ThreeDotsEl>
  );
};
export default Loader;
