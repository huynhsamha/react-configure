import { combineReducers } from 'redux';

import Items from './items';
import Users from './users';
import Todos from './todos';

const reducers = combineReducers({
  Items,
  Users,
  Todos
});

export default reducers;
