import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor='grey'
        strokeWidth='5'
        animationDuration='0.75'
        width='50'
        visible={true}
      />
    </div>
  );
};
