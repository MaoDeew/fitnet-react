import * as actionTypes from './actionTypes';

export const logInWithGoogle = () =>{
    return (dispatch, getState, {getFirebase}) =>{

        const firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(()=>{
            dispatch(saveLogIn())
        }).catch((error)=>{
            console.error('Error '+error.code+' : '+error.message)
        })

    }
}

export const logOutWithGoogle = () =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch(saveLogOut())
        }).catch((error)=>{
            console.error('Error '+error.code+' : '+error.message)
        })
    }
}

const saveLogIn = () =>{
    return{
        type: actionTypes.LOGIN
    }
}

const saveLogOut = () =>{
    return{
        type: actionTypes.LOG_OUT
    }
}

