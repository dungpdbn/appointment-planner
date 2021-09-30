import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  let contacts = props.contacts;
  let addContact = props.addContact;
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  let checkDuplicate = false;

  useEffect(
    () => {
      if(contacts.find(contact => contact.name === name)) {
        checkDuplicate = true;
        console.log(checkDuplicate);
      } 
      else {
        checkDuplicate = false;
        console.log(checkDuplicate);
      }
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!checkDuplicate) {
      addContact(name, phone, email);
      setName('');
      setEmail('');
      setPhone('');
    } 
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} setName={setName} 
        phone={phone} setPhone={setPhone} 
        email={email} setEmail={setEmail} 
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={contacts}/>
      </section>
    </div>
  );
};
