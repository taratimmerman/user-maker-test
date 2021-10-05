import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import AllUsers from './AllUsers';

function Main() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const [users, setUsers] = useState([]);
  const [errorMode, setErrorMode] = useState(false);
  const [gotUsers, setGotUsers] = useState(false);

  const handleAddUser = (user) => {
    setErrorMode(false);
    const firstName = user.firstName.trim();
    const lastName = user.lastName.trim();

    const makeUser = (first, last) => (
      [
        {
          id: uuidv4(),
          fullName: `${first} ${last}`,
        },
      ]
    );

    setUsers(...users, makeUser(firstName, lastName));
    setGotUsers(true);
  };

  const handleError = (error) => {
    setErrorMode(true);

    return (
      error
    );
  };

  const userValidation = {
    firstName: {
      required: 'Please input the user&apos;s first name',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Please only input letters',
      },
    },
    lastName: {
      required: 'Please input the user&apos;s last name',
      pattern: {
        value: /^[A-Za-z]+$/,
        message: 'Please only input letters',
      },
    },
  };

  return (
    <main>
      <section>
        <h2>Make a User</h2>
        <p>This adds a user to our database</p>
        {errorMode
          ? <p>{handleError()}</p>
          : null}
        <form onSubmit={handleSubmit(handleAddUser, handleError)}>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              {...register('firstName', userValidation.firstName)}
              name="firstName"
              id="firstName"
              placeholder="Input first name"
            />
            {errors.email
              ? <p>{errors.firstName.message}</p>
              : null}
          </label>
          <br />
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              {...register('lastName', userValidation.lastName)}
              name="lastName"
              id="lastName"
              placeholder="Input last name"
            />
          </label>
          <br />
          <button type="submit">
            Submit
          </button>
        </form>
      </section>
      <AllUsers users={users} gotUsers={gotUsers} />
    </main>
  );
}

export default Main;
