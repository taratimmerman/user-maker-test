import React from 'react';

const Form = () => (
  <section>
    <h2>Make a User</h2>
    <p>This adds a user to our database</p>
    <form>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Input first name"
        />
      </label>
      <br />
      <label htmlFor="lastName">
        Last Name
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Input last name"
        />
      </label>
    </form>
  </section>
);

export default Form;
