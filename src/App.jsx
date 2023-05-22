import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
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
    name: "",
    number: "",
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log("e.target: ", { name: name, value: value });
    // console.log("this.state: ", this.state);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit state: ", this.state);
    const form = e.currentTarget;
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: name, number: number }],
    }));
    form.reset();
  };

  handleSearch = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    const contacts = this.state.contacts;
    const filter = contacts.filter(person =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log("Search input", value);
    console.log("Search result: ", filter);
  };

  render() {
    const { person, digits, record, contacts } = this.state;
    console.log("Render state: ", this.state);
    return (
      <>
        <div>
          <p>Phonebook</p>
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={person}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              <span>Number</span>
              <input
                type="tel"
                name="number"
                value={digits}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <section>
          <p>Contacts</p>
          <label>
            <span>Find contacts by name</span>
            <input
              type="text"
              name="filter"
              value={record}
              onChange={this.handleSearch}
            />
          </label>
          <ul>
            {contacts.map(({ id, name, number }) => (
              <li key={id}>{name + " " + number}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
