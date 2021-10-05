import { combineReducers } from 'redux';

// eslint-disable-next-line import/named
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
