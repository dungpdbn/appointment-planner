import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };



  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input type="text" id="title" value={title} 
             onChange={({target}) => setTitle(target.value)}/>
      <label for="date">Date:</label>
      <input type="date" id="date" min="getTodayString()" 
              value={date} onChange={({target}) => setDate(target.value)}/>
      <label for="time">Time:</label>
      <input type="time" id="time" value={time}
              onChange={({target}) => setTime(target.value)}/>
      <h2>Contact:</h2>
      <ContactPicker contacts={contacts} onChange={({target}) => setContact(target.value)}/>
      <input type="submit" value="Submit"></input>
      
    </form>
  );
};
