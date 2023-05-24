import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/contactForm/ContactForm";
// import debounce from "lodash/debounce";

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

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit state: ", this.state);
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: name, number: number }],
    }));
    form.reset();
  };

  handleSearch = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // const contacts = this.state.contacts;
    // const filteredContacts = contacts.filter(person =>
    //   person.name.toLowerCase().includes(value.toLowerCase())
    // );
    // console.log("Search input", value);
    // console.log("Search result: ", filteredContacts);
    // this.setState({ filteredContacts });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { filter, contacts } = this.state;
    console.log("Render state: ", this.state);
    console.log("Search result: ", this.filteredContacts());
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <label>
          <span>Find contacts by name</span>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleSearch}
          />
        </label>
        <ul>
          {!filter
            ? contacts.map(({ id, name, number }) => <li key={id}>{name + " " + number}</li>)
            : this.filteredContacts().map(({ id, name, number }) => (
                <li key={id}>{name + " " + number}</li>
              ))}
        </ul>
      </>
    );
  }
}
