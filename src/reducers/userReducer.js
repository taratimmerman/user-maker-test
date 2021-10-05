import {
  ADD_USER,
} from '../actions/userActions';

const initialUserState = {
  users: [],
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
