import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li
            className={css.item}
            key={id}
          >
            {name + ' ' + number}
            <button
              className={css.button}
              id={id}
              type='button'
              onClick={onClick}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onClick: PropTypes.func.isRequired,
// };
