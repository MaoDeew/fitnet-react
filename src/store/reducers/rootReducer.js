import authReducer from './authReducer'
import routinesReducer from './routinesReducer'
import profileReducer from './profileReducer'
import nutritionalReducer from './nutritionalReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase' 

const rootReducer = combineReducers({
    authenticationStore : authReducer,
    routinesStore : routinesReducer,
    firestoreStore : firestoreReducer,
    firebaseStore : firebaseReducer,
    profileStore : profileReducer,
    nutritionalStore : nutritionalReducer
})

export default rootReducer;