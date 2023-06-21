import './App.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './components/contactForm/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contactList/ContactList';
const CONTACTS_KEY = 'contacts-state';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem(CONTACTS_KEY) === null) {
      return;
    }
    const contactsStorage = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    setContacts(contactsStorage);
  }, []);

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
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const handleSearch = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const handleDelete = e => {
    const deletedContacts = contacts.filter(person => person.id !== e.target.id);
    setContacts(deletedContacts);
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
        contacts={filteredContacts()}
        onClick={handleDelete}
      />
    </>
  );
};
