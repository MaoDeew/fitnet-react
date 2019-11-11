import * as actionTypes from './actionTypes';

const changeStatusOfHeightAndWeight = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_DATA
    }
}

export const updateProfileData = (dataUpdate, onSuccessCallback) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch(changeStatusOfHeightAndWeight())
        const firestore = getFirestore();
        const data = {
            height : Number(dataUpdate.height),
            weight : Number(dataUpdate.weight),
        }

        firestore.collection("users").doc(dataUpdate.uidUser).update(data).then(() => {

            if (onSuccessCallback) {
                onSuccessCallback();
            }

          }).catch((error) =>{
              console.log(error)
          });

          console.log(dataUpdate)

    }
}