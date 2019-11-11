import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isHeightAndWeightUpdated : false
}

const updateUserData = (state) => {
    return updateObject(state, {
        isHeightAndWeightUpdated : true
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROFILE_DATA: return updateUserData(state);
        default: return state;
    }
}

export default reducer;