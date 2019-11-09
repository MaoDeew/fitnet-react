import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1
  };

var IngredientCart = (props) =>{
    
    return(
        <div style={{overflowY: 'scroll', height: 250 }}>
            {props.cart.map( ingredient =>{
                const id = Math.floor((Math.random() * 1000000000000000000) + 1);
                return(
                    <Box key={ingredient.name+id} borderRadius={16} {...defaultProps}>
                        <p style={{maxWidth: 300}}><strong>Name: </strong>{ingredient.name} <strong>KiloCalories: </strong>{ingredient.calories}</p>
                    </Box>
                )
                 })
            }
        </div>
    )
}

export default IngredientCart;