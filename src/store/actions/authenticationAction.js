import * as actionTypes from './actionTypes';

export const logInWithGoogle = () =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const initialUserData = {
            name: '',
            surname: '',
            height: 0,
            weight: 0,
            routines: [],
            calories:[]
        }
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((response)=>{
            return firestore.collection('users').doc(response.user.uid).set(initialUserData)
        }).then(() =>{
            dispatch(saveLogIn())
        })
        .catch((error)=>{
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

