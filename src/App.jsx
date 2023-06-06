import './App.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/contactForm/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contactList/ContactList';
const CONTACTS_KEY = 'contacts-state';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem(CONTACTS_KEY) === null) {
      return;
    }
    const contactsStorage = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    this.setState({ contacts: contactsStorage });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
    return null;
  }

  handleSubmit = (name, number) => {
    const { contacts } = this.state;
    if (contacts.some(person => person.name.toLowerCase() === name.toLowerCase())) {
      Report.info(`${name} is already in contacts!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleSearch = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDelete = e => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(person => person.id !== e.target.id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter
          onChange={this.handleSearch}
          value={filter}
        />
        <ContactList
          contacts={this.filteredContacts()}
          onClick={this.handleDelete}
        />
      </>
    );
  }
}
