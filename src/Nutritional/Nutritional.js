import React, { Component } from 'react';
import classes from './Nutritional.css';
import NavBar from '../NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Fab from '@material-ui/core/Fab';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import axios from './axiosInstance';
import Ingredient from './Ingredient';

class Nutritional extends Component {

    state = {
        ingredients: [],
        loading: false,
        nextPage: null,
        previousPage: null,
        caloriesCart: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios.get("/ingredient/?language=2&status=2")
            .then(response => {
                console.log(response)
                this.setState({
                    ingredients: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous
                });
            })
            
    }

    render() {
        return (
            <div>
                <h1 className={classes.mainTitle}>Pick one of the ingredients</h1>

                <Grid style={{ flexGrow: 1 }} container spacing={3}>
                    <Grid className={classes.gridBlock} item sm={7}>

                       {this.state.loading ? this.renderLoading() : this.renderIngredients()}

                    </Grid>
                    <Grid className={classes.gridBlock} item sm={5}>
                        <h2>Count of calories</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Grid>
                </Grid>

            </div>
        );
    }

    renderLoading() {
        return (
            <div>
                <h1 className={classes.title}>Loading Ingredients</h1> <CircularProgress />
            </div>
        );
    }

    renderPagination(){
        return(
            <div className={classes.pagination}>
            
           <Fab size='small' onClick={this.handleClickPrevious} disabled={this.state.previousPage==null ? true: false} color="primary" aria-label="add" >
                <SkipPreviousIcon />
            </Fab>
            <Fab size='small' onClick={this.handleClickNext} disabled={this.state.nextPage==null ? true: false} color="primary" aria-label="add">
                <SkipNextIcon />
            </Fab>
        </div>
        );
    }

    renderIngredients(){
        return(
            <div>
            <h1 className={classes.title}>Ingredients</h1>
            {this.renderPagination()}
        <div>
            {this.state.ingredients.map(ingredient => <Ingredient 
            key={ingredient.id} name={ingredient.name} 
            calories={ingredient.energy} 
            protein={ingredient.protein} 
            carbohydrates={ingredient.carbohydrates} 
            fats={ingredient.fat}
            handleCalorieSelection={this.handleCalorieSelection}/>)}
            </div>
        </div>
        );
      
    }

    handleCalorieSelection = calorie =>{
         var updatedCaloriesCart = [...this.state.caloriesCart];
         updatedCaloriesCart.push(calorie);
         
         this.setState({
             caloriesCart : updatedCaloriesCart
         }, ()=>{
             /*
             Callback to execute some alert or announce to the user that one calorie from the ingredient was selected.
             */ 
             //alert(this.state.caloriesCart);
         });
    }


    handleClickNext = () => {
        axios.get(this.state.nextPage)
            .then(response => {
                
                this.setState({
                    ingredients: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous
                });
            })
      }

      handleClickPrevious = () => {
        axios.get(this.state.previousPage)
            .then(response => {
                
                this.setState({
                    ingredients: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous
                });
            })
      } 

}

export default Nutritional;