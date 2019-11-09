import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classesCss from './Ingredient.css'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      width : '330px'
    },
  }));

var Ingredient = (props) =>{

  const handleClick = () => {
    
    props.handleCalorieSelection(props)
    
    
  };

    const classes = useStyles();

    return(
      <div style={{padding: 7, display: 'inline-block'}}>
      <Paper className={classes.root}>
        <Typography>
          <strong>Nombre:</strong> {props.name}
        </Typography>
        <Typography>
            <i style={{paddingRight: 6}} className="fas fa-fire-alt"> </i><strong>Calories:</strong> {props.calories} kcal
        </Typography>
        <Typography>
            <i style={{paddingRight: 6}} className="fas fa-drumstick-bite"> </i><strong>Protein:</strong> {props.protein} g
        </Typography>
        <Typography>
            <i style={{paddingRight: 6}} className="fas fa-bread-slice"> </i><strong>Carbohydrates:</strong> {props.carbohydrates} g
        </Typography>
        <Typography>
            <i style={{paddingRight: 6}} className="fas fa-hamburger"> </i><strong>Fats:</strong> {props.fats} g
        </Typography>
        <Button onClick={handleClick} variant="contained" color="secondary" className={classesCss.button}>
        Add to the count
        </Button>
      </Paper>
    </div>
    );


}



export default Ingredient;