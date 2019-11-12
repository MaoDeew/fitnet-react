import * as actionTypes from './actionTypes';

const changeStatusUploadIngredient = () => {
    return {
        type: actionTypes.SAVE_CALORIE_COUNT
    }
}

export const uploadSelectedIngredients = (uploadData, onSuccessCallback) => {
    return (dispatch, getState, { getFirebase , getFirestore }) => {
        dispatch(changeStatusUploadIngredient())
        const firebase = getFirebase();
        const firestore = getFirestore();
        

        var ingredientsCart = []
        

        uploadData.ingredientsCart.forEach(ingredient =>{
            var ingredientData = {
                calories : ingredient.calories,
                carbohydrates : ingredient.carbohydrates,
                fats : ingredient.fats,
                name : ingredient.name,
                protein : ingredient.protein
            }
            ingredientsCart.push(ingredientData)
        });

        

        const data = {
            calories : firebase.firestore.FieldValue.arrayUnion({
                dataUpload : firebase.firestore.Timestamp.fromDate(new Date()),
                calorieCount : uploadData.calorieCount,
                ingredientsCart : ingredientsCart
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