import styled from "styled-components"

const Form = styled.form`
    background-color: rgb(250, 246, 187);
    width: 800px;
    margin-left: auto;
    margin-right: auto;

`

const Text = styled.p`
    color: rgb(201, 103, 214);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20px;
    padding-top: 40px;

    padding-left: 40px;

`
const Input = styled.input`
    padding: 15px;
    margin-left: 40px;
  border-radius: 20px;
  border: none;
  box-shadow: 2px 3px 2px;
  width: 650px;

`

const Btn = styled.button`
  background-color:rgb(201, 103, 214);
  border-radius: 10px;
  box-shadow: 2px 5px 2px;
  color: rgb(250, 246, 187);
  width: 200px;
  padding: 10px;
  margin-top: 40px;
  border: none;
  margin-left: auto;
  display: block;
  margin-right: 80px;




`

export const ContactForm = ({ onSubmit, onChange, name, number })=>{
    return(

    

    <Form onSubmit={onSubmit}>
            <Text>Name</Text>
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={onChange}
              required
            />


            <Text>Number</Text>
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={onChange}
              required
            />


            <Btn type="submit">add contact</Btn>
          </Form>
    )
}

export default ContactForm;