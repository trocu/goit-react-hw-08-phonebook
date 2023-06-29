import './App.css';
import { useEffect } from 'react';
import { ContactForm } from './components/contactForm/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './redux/selectors';
import { fetchContact } from './redux/contactsSlice';
import { CONTACTS_KEY } from './redux/constants';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(CONTACTS_KEY) === null) {
      return;
    }
    const contactsStorage = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    dispatch(fetchContact(contactsStorage));
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    } else if (contacts.length === 0) {
      localStorage.clear();
    }
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
