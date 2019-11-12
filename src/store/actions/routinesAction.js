import * as actionTypes from './actionTypes';

const changeStatusUploadRoutines = () => {
    return {
        type: actionTypes.SAVE_ROUTINES
    }
}

export const uploadSelectedRoutines = (uploadData, onSuccessCallback) =>{
    return (dispatch, getState, { getFirebase , getFirestore }) => {
        dispatch(changeStatusUploadRoutines())
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        console.log(uploadData.uidUser)
        var routinesCart = []
        
        uploadData.routinesCart.forEach(routine =>{
            var routineData = {
                title : routine.routine.title,
                description : routine.routine.description
            }
            routinesCart.push(routineData)
        });

        

        const data = {
            routines : firebase.firestore.FieldValue.arrayUnion({
                dataUpload : firebase.firestore.Timestamp.fromDate(new Date()),
                routinesCart : routinesCart
            })
        }

    firestore.collection("users").doc(uploadData.uidUser).update(data).then(() => {

            if (onSuccessCallback) {
                onSuccessCallback();
            }

          }).catch((error) =>{
              console.log(error)
          });

          console.log(uploadData)

    }
}