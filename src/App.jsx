import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
// import debounce from "lodash/debounce";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = e => {
    e.preventDefault();
    // console.log("e.target.value: ", e.target.value);
    // console.log("e.currentTarget: ", e.currentTarget);
    const { name, value } = e.target;

    // const name = e.target.value;
    this.setState({ [name]: value });
    // this.setState({ name: value, id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("e.target.value: ", e.target.value);
    // console.log("e.currentTarget: ", e.currentTarget.name.value);
    const value = e.currentTarget.name.value;
    // const { name, value } = e.currentTarget;
    this.setState({ contacts: [{ id: nanoid(), name: value }] });
    // console.log("this state name: ", this.state.name);
  };

  render() {
    const { person } = this.state;
    console.log(this.state);
    return (
      <>
        <div>
          <p>Phonebook</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={person}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <section>
          <p>Contacts</p>
          <ul>
            <li></li>
          </ul>
        </section>
      </>
    );
  }
}
