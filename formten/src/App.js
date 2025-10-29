// App.jsx
import styled from "styled-components"
// import { Component, useState } from "react";
import { nanoid } from "nanoid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import contact from "./contacts.json";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";


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

export function App(){
  const [contacts, setContacts] = useState(contact)
  const [filter, setFilter] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const {theme, toggleTheme} = useContext(ThemeContext)
  // state = {
  //   contacts: contact,
  //   filter: "",
  //   name: "",
  //   number: "",
  // };

  useEffect(() => {
    const saveContacts = localStorage.getItem("contacts");
    if(saveContacts){
      setContacts(JSON.parse(saveContacts))
    }
 }, []);

 useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
 }, [contacts])
  // componentDidMount(){
  //   const saveContacts = localStorage.getItem("contacts");
  //   if(saveContacts){
  //     this.setState({contacts: JSON.parse(saveContacts)})
  //   } else {
  //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  // }
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.contacts !== this.state.contacts){
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  //   }
  // }

  function handleChange(e) {
  const { name, value } = e.target;
  if (name === "name") setName(value);
  if (name === "number") setNumber(value);
}

  function handleSubmit(e){
    e.preventDefault();
    // const { contacts, name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    // this.setState({
    //   contacts: [...contacts, newContact],
    //   name: "",
    //   number: "",
    // });

    setContacts([...contacts, newContact])
    setName("")
    setNumber("")
  };

  function handleFilterChange(value) {
    setFilter(value);
  };

  function deleteId (id) {
  setContacts((prevCont) => prevCont.filter((c) => c.id !== id));
};


    return (
      <Box className="App" style={{backgroundColor: theme === "light" ? "rgb(250, 246, 187)" : "rgb(200, 80, 60)"}}>
        <button onClick={toggleTheme}>toggleTheme</button>
        <p>{theme}</p>
        <Title>Phonebook</Title>

        <ContactForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          name={name}
          number={number}
        />

        <Filter 
          value={filter} 
          onFilter={handleFilterChange} 
        />

        <Title>Contacts</Title>
        <ContactList
          contacts={contacts}
          deleteId={deleteId}
          filter={filter}
        />
        
      </Box>
    );
  }

export default App;
