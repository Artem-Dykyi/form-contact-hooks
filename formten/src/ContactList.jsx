import styled from "styled-components"

const Box = styled.ul`
  background-color: rgb(250, 246, 187);
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: 150px;
  list-style: none;
  padding: 50px;


`
const TextLi = styled.li`
    color: rgb(201, 103, 214);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20px;
    padding-bottom: 10px;

    padding-left: 20px;
  


`

const Btn = styled.button`
  background-color:rgb(201, 103, 214);
  border-radius: 10px;
  box-shadow: 2px 5px 2px;
  color: rgb(250, 246, 187);
  width: 100px;
  padding: 8px;
  border: none;
  margin-left: 140px;

`

export function ContactList({ contacts, deleteId, filter }){
 
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      {filterContacts.map(({ name, id, number }) => (
        <TextLi key={id}>
          {name}: {number}
          <Btn type="button" onClick={()=> deleteId(id)}>delete</Btn>
        </TextLi>
      ))}
    </Box>
  );
};


export default ContactList;