import actionTypes from '../actions/action-types';

const initialState = false;

const reducer = (state = initialState, action) => {
  // console.log('reducer demo 1');
  switch (action.type) {
    case actionTypes.TOGGLE_DEMO_1:
      state = !state;
      break;
    case actionTypes.RESET_DEMO_1:
      state = initialState;
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
