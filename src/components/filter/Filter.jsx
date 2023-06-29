import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { filterContact } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type='text'
          name='filter'
          value={filter}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
};
