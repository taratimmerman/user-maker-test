import React from 'react';

import PropTypes from 'prop-types';

const User = ({ firstName, lastName }) => (
  <article>
    <h3>
      <span>{firstName}</span>
      <span>{lastName}</span>
    </h3>
  </article>
);

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,

};

User.defaultProps = {
  firstName: 'Stranger',
  lastName: 'Danger',
};

export default User;
