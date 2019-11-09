import React, { Component } from 'react';
import classes from './Nutritional.css';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Fab from '@material-ui/core/Fab';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import axios from './axiosInstance';
import Ingredient from './Ingredient';

class Nutritional extends Component {

    state = {
        ingredients: [],
        loading: false,
        nextPage: null,
        previousPage: null,
        ingredientsCart: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios.get("/ingredient/?language=2&status=2")
            .then(response => {
                //console.log(response)
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
                    
                    <Grid style={{}} className={classes.gridBlock} item sm={5}>
                        <h2>Nutritional Plates</h2>
                        <p>In this part, you are going to find the variety of different plates and its specific nutiritional information.</p>
                        <h2>Count of calories</h2>
                        <p>Standards of calorie intake differ from one country to another. The principal recommendation is to consume 2,700 kilocalories per day and 2,200 kilocalories per day for women. Meanwhile, the minimun consume in adults is 1,800 kilocalories per day. In this part you can select different combination of plates to consume in a day, and the Calorie Bar will tell you if you reach at leats thei minimun kilocaries, and not to overpass the maximun of kilocaries</p>
                            {this.renderCalorieCount()}
                    </Grid>
                    <Grid className={classes.gridBlock} item sm={7}>

                       {this.state.loading ? this.renderLoading() : this.renderIngredients()}

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

    renderCalorieCount(){
        var caloriesCount = this.state.ingredientsCart.reduce((partial_sum, a) => partial_sum + a,0); 
        var caloriesCountString = new String(caloriesCount);

        if (caloriesCount < 9) {
            caloriesCountString = "0"+caloriesCountString;
        }

        return(
            <div style={{width: 200, height: 200}}>
               <CircularProgressbarWithChildren 
               value={caloriesCount} 
               maxValue={2500} 
               styles={buildStyles({
                    pathColor: "blue",
                    trailColor: "grey",
               })} >
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong style={{ fontSize: 48, marginTop: -5}}>{caloriesCountString}</strong>
                        <p style={{textAlign : 'center'}}>kilocalories</p>
                    </div>
            </CircularProgressbarWithChildren>
            </div>
        )
    }

    renderList

    handleCalorieSelection = ingredient =>{
         var updatedingredientsCart = [...this.state.ingredientsCart];
         updatedingredientsCart.push(ingredient.calories);
         
         this.setState({
             ingredientsCart : updatedingredientsCart
         }, ()=>{
             /*
             Callback to execute some alert or announce to the user that one calorie from the ingredient was selected.
             */ 
             console.log(this.state.ingredientsCart);
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