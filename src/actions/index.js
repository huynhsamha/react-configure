import actionTypes from './action-types';

export const toggleDemo1 = () => ({
  type: actionTypes.TOGGLE_DEMO_1
});

export const resetDemo1 = () => ({
  type: actionTypes.RESET_DEMO_1
});

export const addDemo2 = item => ({
  type: actionTypes.ADD_DEMO_2,
  item
});

export const removeDemo2 = id => ({
  type: actionTypes.REMOVE_DEMO_2,
  id
});
