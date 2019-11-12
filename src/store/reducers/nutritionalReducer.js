import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    ingredientUpload : false
}

const uploadIngredient = (state) => {
    return updateObject(state, {
        ingredientUpload : true
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_CALORIE_COUNT: return uploadIngredient(state);
        default: return state;
    }
}

export default reducer;