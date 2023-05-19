import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = e => {
    e.preventDefault();
    // console.log("e.target.value: ", e.target.value);
    // console.log("e.currentTarget: ", e.currentTarget);

    // const name = e.target.value;
    this.setState({ name: e.target.value, id: nanoid() });
  };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     // console.log("e: ", e);
  //     // console.log("e.target.name.value: ", e.target.name.value);
  //     const form = e.currentTarget;
  //     const name = form.elements.name.value;
  //     // console.log("name: ", name);
  //     this.setState({ name: e.target.value });
  //     console.log("e.target.value: ", e.target.value);
  //     console.log("this state: ", this.state);
  //     // this.props.onSubmit({ name });
  //   };

  render() {
    const { name } = this.state;
    console.log(this.state);
    return (
      <>
        <div>
          <p>Phonebook</p>
          <form>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <p>Contacts</p>
        </div>
      </>
    );
  }
}
