import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUserAction } from '../actions/userActions';

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

function mapStateToProps(state) {
  const [users] = state.userReducer.users;
  return (
    users
  );
}

function mapDispatchToProps() {
  bindActionCreators = {
    addUserAction,
  };

  return (
    bindActionCreators
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
