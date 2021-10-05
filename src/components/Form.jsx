import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUserAction } from '../actions/userActions';

function Form({ addUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const handleAddUser = (user) => {
    const firstName = user.firstName.trim();
    const lastName = user.lastName.trim();

    addUser(firstName, lastName);
  };

  const handleError = (error) => console.log(error);

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
    <section>
      <h2>Make a User</h2>
      <p>This adds a user to our database</p>
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
            name="lastName"
            id="lastName"
            placeholder="Input last name"
          />
        </label>
      </form>
    </section>
  );
}

Form.propTypes = {
  addUser: PropTypes.func,
};

Form.defaultProps = {
  addUser: PropTypes.any,
};

function mapStateToProps(state) {
  const [users] = state.userReducer.users;
  return users;
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addUser: addUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
