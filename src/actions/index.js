import { ActionTypes } from './../constants/action-types';

export const toggleDemo1 = () => ({
  type: ActionTypes.TOGGLE_DEMO_1
});

export const resetDemo1 = () => ({
  type: ActionTypes.RESET_DEMO_1
});

export const addDemo2 = item => ({
  type: ActionTypes.ADD_DEMO_2,
  item
});

export const removeDemo2 = id => ({
  type: ActionTypes.REMOVE_DEMO_2,
  id
});
