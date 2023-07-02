import css from './ContactForm.module.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      Report.info(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact({ name: name, phone: number }));
    setName('');
    setNumber('');
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
    >
      <label>
        <span className={css.label}>Name</span>
        <input
          className={css.input}
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <span className={css.label}>Number</span>
        <input
          className={css.input}
          type='tel'
          name='number'
          value={number}
          onChange={handleChange}
          // pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </label>
      <button
        className={css.button}
        type='submit'
      >
        Add contact
      </button>
    </form>
  );
};
