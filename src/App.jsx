import './App.css';
import { useEffect } from 'react';
import { ContactForm } from './components/contactForm/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (localStorage.getItem(CONTACTS_KEY) === null) {
  //     return;
  //   }
  //   const contactsStorage = JSON.parse(localStorage.getItem(CONTACTS_KEY));
  //   dispatch(fetchContact(contactsStorage));
  // }, [dispatch]);

  // useEffect(() => {
  //   if (contacts.length > 0) {
  //     localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  //   } else if (contacts.length === 0) {
  //     localStorage.clear();
  //   }
  // }, [contacts]);

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
