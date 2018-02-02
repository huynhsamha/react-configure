import { ActionTypes } from './../constants/action-types';

const initialState = [];

for (let i = 0; i < 15; i++) initialState.push({
    id: i, name: `Item ${i}`, left: i * 20, price: i * 85000
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DEMO_2:
            let { item } = action;
            state.push(item);
            break;
        case ActionTypes.REMOVE_DEMO_2:
            let {id} = action;
            let itemRemove = state.filter({id: id})[0];
            state = state.splice(state.indexOf(item), 1);
            break;
        default:
            break;
    }
    return state;
}

export default reducer;