import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
// import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const dispatch = useDispatch();

  // const handleDelete = e => {
  //   dispatch(deleteContact(e.target.id));
  // };

  const selectFilteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filteredContacts = selectFilteredContacts();

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li
            className={css.item}
            key={id}
          >
            {/* {name + ' ' + phone} */}
            <div className={css.box}>
              <p className={css.name}>{name}</p>
              <p className={css.phone}>{phone}</p>
            </div>
            <button
              className={css.button}
              id={id}
              type='button'
              // onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
