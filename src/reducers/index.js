import { combineReducers } from 'redux';

import Demo1 from './action-demo-1';
import Demo2 from './action-demo-2';
import Users from './users';

const reducers = combineReducers({
  Demo1,
  Demo2,
  Users
});

export default reducers;
