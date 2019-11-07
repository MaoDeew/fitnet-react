import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = { }

const logIn = (state) => {
    return updateObject(state, {
        isUserLoggedIn: true,
    });
}

const logOut = (state) => {
    return updateObject(state, {
        isUserLoggedIn: false,
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return logIn(state);
        case actionTypes.LOG_OUT : return logOut(state);
        default: return state;
    }
}

export default reducer;
