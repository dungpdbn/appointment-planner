import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="lname">Name:</label>
      <input type="text" id="lname" value={name} 
             onChange={({target}) => setName(target.value)}/>
      <label for="lphone">Phone:</label>
      <input type="tel" id="lphone" pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b" 
              value={phone} onChange={({target}) => setPhone(target.value)}/>
      <label for="lemail">Email:</label>
      <input type="email" id="lemail" value={email}
              onChange={({target}) => setEmail(target.value)}/>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
