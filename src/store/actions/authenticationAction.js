import * as actionTypes from './actionTypes';

export const logInWithGoogle = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((response) => {
           
            const initialUserData = {
                name: response.user.displayName.split(" ")[0],
                surname: response.user.displayName.split(" ")[1],
                email : response.user.email,
                height: 0,
                weight: 0,
                routines: [],
                calories: []
            }

            var docUser = firestore.collection("users").doc(response.user.uid);

            docUser.get().then(function (doc) {
                if (doc.exists) {
                    return doc.data()
                } else {
                   const newUserFirestore = firestore.collection('users').doc(response.user.uid).set(initialUserData)
                return newUserFirestore
                }
            }).catch(function (error) {
                console.error('Error ' + error.code + ' : ' + error.message)
            });
        }).then(() => {
            dispatch(saveLogIn())
        }).catch((error) => {
                console.error('Error ' + error.code + ' : ' + error.message)
        })

    }
}

export const logOutWithGoogle = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch(saveLogOut())
        }).catch((error) => {
            console.error('Error ' + error.code + ' : ' + error.message)
        })
    }
}

const saveLogIn = () => {
    return {
        type: actionTypes.LOGIN
    }
}

const saveLogOut = () => {
    return {
        type: actionTypes.LOG_OUT
    }
}

