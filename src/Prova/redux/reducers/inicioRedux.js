
import { SET_INICIO } from '../actions/actionTypes';

const initialState = {
    newValue: ''
};

export const inicioRedux = (state = initialState, action) => {
    switch (action.type) {
        case SET_INICIO:
            return {
                ...state,
                newValue: action.newValue
            };

        default:
            return state;
    }
};