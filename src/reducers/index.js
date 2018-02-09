import { combineReducers } from 'redux';

import Items from './items';
import Users from './users';

const reducers = combineReducers({
  Items,
  Users
});

export default reducers;
