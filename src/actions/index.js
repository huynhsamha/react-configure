import actionTypes from './action-types';

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  item
});

export const removeItem = id => ({
  type: actionTypes.REMOVE_ITEM,
  id
});

export const editItem = (id, newItem) => ({
  type: actionTypes.EDIT_ITEM,
  id,
  newItem
});

export const moveItem = (id, isUp) => ({
  type: actionTypes.MOVE_ITEM,
  id,
  isUp
});

export const removeUser = id => ({
  type: actionTypes.REMOVE_USER,
  id
});
