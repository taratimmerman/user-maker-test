import React from 'react';

import PropTypes from 'prop-types';
import User from './User';

function AllUsers({ users, gotUsers }) {
  return (
    <>
      <h2>System Users</h2>
      <section>
        {!gotUsers
          ? <h3>No users found in database</h3>
          : users.map((user) => (
            <User key={user.id} firstName={user.firstName} lastName={user.lastName} />
          ))}
      </section>
    </>
  );
}

AllUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
  gotUsers: PropTypes.bool,
};

AllUsers.defaultProps = {
  users: [],
  gotUsers: false,
};

export default AllUsers;
