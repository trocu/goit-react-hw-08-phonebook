import "./App.css";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/contactForm/ContactForm";
import { Filter } from "./components/filter/Filter";
import { ContactList } from "./components/contactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

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
    return contacts.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDelete = e => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(person => person.id !== e.target.id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter
          onChange={this.handleSearch}
          value={filter}
        />
        {!filter ? (
          <ContactList
            contacts={contacts}
            onClick={this.handleDelete}
          />
        ) : (
          <ContactList
            contacts={this.filteredContacts()}
            onClick={this.handleDelete}
          />
        )}
      </>
    );
  }
}
