// USER ACTION TYPES
const ADD_USER = 'USERS_ADD_USER';

// USER ACTION CREATORS
const addUserAction = (lastName, firstName) => (dispatch) => {
  const users = [];
  const user = { lastName, firstName };

  users.push(user);
  dispatch({ type: ADD_USER });

  return users;
};

export {
  ADD_USER,
  addUserAction,
};
