// App.jsx
import styled from "styled-components"
import { Component } from "react";
import { nanoid } from "nanoid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import contact from "./contacts.json";

const Title = styled.h2`
    color: rgb(201, 103, 214);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 36px;
    text-align: center;
  padding-top: 20px;

`

const Box = styled.div`
  background-color: rgb(250, 246, 187);
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  border-radius: 20px;
  box-shadow: 2px 5px 5px;


`

export class App extends Component {
  state = {
    contacts: contact,
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount(){
    const saveContacts = localStorage.getItem("contacts");
    if(saveContacts){
      this.setState({contacts: JSON.parse(saveContacts)})
    } else {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
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
      number,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: "",
      number: "",
    });
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  deleteId = (id) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter((c) => c.id !== id),
  }));
};

  render() {
    return (
      <Box className="App">
        <Title>Phonebook</Title>

        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />

        <Filter 
          value={this.state.filter} 
          onFilter={this.handleFilterChange} 
        />

        <Title>Contacts</Title>
        <ContactList
          contacts={this.state.contacts}
          deleteId={this.deleteId}
          filter={this.state.filter}
        />
        
      </Box>
    );
  }
}
export default App;
