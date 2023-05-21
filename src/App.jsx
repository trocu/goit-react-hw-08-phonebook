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
    // console.log("e.target: ", e.target);
    // console.log("e.currentTarget: ", e.currentTarget);
    const { name, value } = e.target;
    console.log("name: ", name);
    console.log("value: ", value);

    // const name = e.target.value;
    this.setState({ [name]: value });
    // this.setState({ name: value, id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("e.target.value: ", e.target.value);
    // console.log("e.currentTarget: ", e.currentTarget.name.value);
    // console.log("e.target: ", e.target);
    // console.log("e.currentTarget: ", e.currentTarget);
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    console.log("name", name);
    console.log("number", number);
    // const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: name, number: number }],
    }));

    // console.log("this state name: ", this.state.name);
  };

  render() {
    const { person, digits, record, contacts } = this.state;
    // const { id, name, person } = this.state;
    console.log(this.state);
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
              onChange={this.handleChange}
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
