import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    routinesUpload : false
}

const uploadRoutines = (state) => {
    return updateObject(state, {
        routinesUpload : true
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_ROUTINES: return uploadRoutines(state);
        default: return state;
    }
}

export default reducer;