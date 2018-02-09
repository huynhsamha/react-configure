import actionTypes from '../actions/action-types';

const initialState = [];

function toHex(input) {
  var hash = '',
    alphabet = '0123456789abcdef',
    alphabetLength = alphabet.length;

  do {
    hash = alphabet[input % alphabetLength] + hash;
    input = parseInt(input / alphabetLength, 10);
  } while (input);

  return hash;
}

let currentID = 0;

function nextID() {
  return toHex((++currentID) * 199999999).toUpperCase();
}

for (let i = 0; i < 10; i++) initialState.push({
  id: nextID(),
  name: `Item ${i}`,
  leave: i * 20,
  price: i * 8521 + (20 - i) * 1958,
  date: new Date(2018, i % 12, i * 197 % 28 + 1)
});

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_ITEM:
      const { item } = action;
      item.id = nextID();
      item.date = new Date();
      console.log(item);
      return [...state, item];

    case actionTypes.REMOVE_ITEM:
      return state.filter((o, i) => o.id !== action.id);

    case actionTypes.EDIT_ITEM:
      return state.map((item, idx) => {
        if (item.id !== action.id) return item;
        return { ...item, ...action.newItem };
      });

    case actionTypes.MOVE_ITEM:
      const { id, isUp } = action;
      const srcItem = state.filter(o => o.id == id)[0];
      let idx = state.indexOf(srcItem);
      if (isUp) {
        if (idx == 0) return state;
        const tarItem = state[--idx];
        return [
          ...state.slice(0, idx),
          { ...srcItem },
          { ...tarItem },
          ...state.slice(idx + 2)
        ];
      } else {
        if (idx == state.length - 1) return state;
        const tarItem = state[idx + 1];
        return [
          ...state.slice(0, idx),
          { ...tarItem },
          { ...srcItem },
          ...state.slice(idx + 2)
        ];
      }

    default:
      return state;
  }
};

export default reducer;
