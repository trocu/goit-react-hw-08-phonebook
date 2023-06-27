import './App.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useEffect } from 'react';
import { ContactForm } from './components/contactForm/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from './redux/selectors';
import { addContact, deleteContact, fetchContact, filterContact } from './redux/actions';
import { CONTACTS_KEY } from './redux/constants';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(contacts);
  // console.log(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(CONTACTS_KEY) === null) {
      return;
    }
    const contactsStorage = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    dispatch(fetchContact(contactsStorage));
    console.log(contactsStorage);
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    } else if (contacts.length === 0) {
      localStorage.clear();
    }
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (contacts.some(person => person.name.toLowerCase() === name.toLowerCase())) {
      Report.info(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact(name, number));
  };

  const handleSearch = e => {
    // const { value } = e.target;
    // console.log(e.target.value);
    dispatch(filterContact(e.target.value));
  };

  // const filteredContacts = () => {
  //   if (filter === '') {
  //     return contacts;
  //   }
  //   return contacts.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  // };

  // const handleDelete = e => {
  //   const deletedContacts = contacts.filter(person => person.id !== e.target.id);
  //   dispatch(deleteContact(deletedContacts));
  // };
  const handleDelete = e => {
    // const deletedContacts = contacts.filter(person => person.id !== e.target.id);
    dispatch(deleteContact(e.target.id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter
        onChange={handleSearch}
        value={filter}
      />
      <ContactList
        contacts={contacts}
        onClick={handleDelete}
      />
    </>
  );
};
