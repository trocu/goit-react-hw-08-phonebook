import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  const getFilteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li
            className={css.item}
            key={id}
          >
            {name + ' ' + number}
            <button
              className={css.button}
              id={id}
              type='button'
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
