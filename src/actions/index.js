import { ActionTypes } from './../constants/action-types';

export const toggleDemo1 = () => {
    return {
        type: ActionTypes.TOGGLE_DEMO_1
    }
}

export const resetDemo1 = () => {
    return {
        type: ActionTypes.RESET_DEMO_1
    }
}

export const addDemo2 = (item) => {
    return {
        type: ActionTypes.ADD_DEMO_2,
        item
    }
}

export const removeDemo2 = (id) => {
    return {
        type: ActionTypes.REMOVE_DEMO_2,
        id
    }
}