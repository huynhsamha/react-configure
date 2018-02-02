import { combineReducers } from 'redux';

import Demo1 from './action-demo-1';
import Demo2 from './action-demo-2';

const reducers = combineReducers({
    Demo1,
    Demo2
});

export default reducers;