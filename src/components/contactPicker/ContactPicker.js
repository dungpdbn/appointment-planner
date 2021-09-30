import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <div>
      <select onChange={onChange}>
        <option value="" selected="selected" key="">--Please choose an option--</option>
        {contacts.map(contact => <option value={contact.name}  key={contact.id}>{contact.name}</option>)}
      </select> 
    </div>
    
  );
};
