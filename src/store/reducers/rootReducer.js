import authReducer from './authReducer'
import routinesReducer from './routinesReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    authenticationStore : authReducer,
    routinesStore : routinesReducer
})

export default rootReducer;