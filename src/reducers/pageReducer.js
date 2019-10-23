import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pages: []
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_PAGE:
            return {
                ...state,
                pages: action.payload
            }


        default: return state;

    }
}

export default pageReducer;