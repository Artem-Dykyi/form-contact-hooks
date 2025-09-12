import { Component } from "react";
import { nanoid } from "nanoid";
import { Filter } from "./Filter";
export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
};


  handleSubmit = (e) => {
    e.preventDefault();

    const { contacts, name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: "",
      number: ""
    });
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div className="App">
        <div>
          <h1>Contacts</h1>

          <form onSubmit={this.handleSubmit}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleChange}
              required
            />


            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleChange}
              required
            />


            <button type="submit">add contact</button>
          </form>

          <h2>Contacts</h2>
          <ul>
            {contacts.map(({ name, id, number }) => (
              <li key={id}>{name}:{number}</li>
            ))}
          </ul>
        </div>
        <Filter onFilter={this.handleFilterChange}/>
      </div>
    );
  }
}

export default App;
