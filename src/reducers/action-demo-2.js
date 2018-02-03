import { ActionTypes } from './../constants/action-types';

const initialState = [];

let currentID = 10;
for (let i = 0; i < currentID; i++) initialState.push({
    id: i, name: `Item ${i}`, leave: i * 20, price: i * 85000
});

const reducer = (state = initialState, action) => {
    // console.log('reducer demo2');
    switch (action.type) {
        case ActionTypes.ADD_DEMO_2:
            let { item } = action;
            item.id = currentID++;
            console.log(item);
            return [...state, item];
            break;
        case ActionTypes.REMOVE_DEMO_2:
            let { id } = action;
            return state.filter((o, i) => o.id != id);
            break;
        default:
            break;
    }
    return state;
}

export default reducer;