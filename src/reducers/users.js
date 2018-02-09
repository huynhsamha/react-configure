import actionTypes from '../actions/action-types';

const userList = [];
for (let i = 0; i < 100; i++) {
  userList.push({
    id: i,
    name: `User ${i}`,
    email: `user-${i}@gmail.com`,
    salary: i * 975 + (100 - i) * 285,
    address: `Street ${100 - i}`
  });
}

const initialState = userList;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_USER:
      return state.filter(o => o.id != action.id);
    default:
      return state;
  }
};

export default reducer;
