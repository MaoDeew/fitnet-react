import React, { Component } from 'react';
import classes from './Nutritional.css';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Fab from '@material-ui/core/Fab';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import Button from '@material-ui/core/Button';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import axios from './axiosInstance';
import Ingredient from './Ingredient'
import IngredientCart from './IngredientCart';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/nutritionalAction';

import * as alertify from 'alertifyjs';

class Nutritional extends Component {

    state = {
        ingredients: [],
        loading: false,
        loadingPagination: false,
        nextPage: null,
        previousPage: null,
        ingredientsCart: [],
        uidUser: this.props.uidUser,
        calorieCount: 0,
        ingredientUpload : this.props.ingredientUpload
    }

    componentDidMount() {
        console.log(this.state.calorieCount)
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

                    <Grid className={classes.gridBlock} item sm={5}>
                        <h2>Nutritional Plates</h2>
                        <p>In this part, you are going to find the variety of different plates and its specific nutiritional information.</p>
                        <h2>Count of calories</h2>
                        <p>Standards of calorie intake differ from one country to another. The principal recommendation is to consume 2,700 kilocalories per day and 2,200 kilocalories per day for women. Meanwhile, the minimun consume in adults is 1,800 kilocalories per day. In this part you can select different combination of plates to consume in a day, and the Calorie Bar will tell you if you reach at leats thei minimun kilocaries, and not to overpass the maximun of kilocaries</p>
                        <Grid className={classes.gridBlockCalories} container>
                            {this.renderCalorieCount()}
                            {this.renderCart()}
                        </Grid>
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

    renderPagination() {

        if (this.state.loadingPagination) {
            return (
                <CircularProgress />
            )
        } else {
            return (
                <div className={classes.pagination}>

                    <Fab size='small' onClick={this.handleClickPrevious} disabled={this.state.previousPage == null ? true : false} color="primary" aria-label="add" >
                        <SkipPreviousIcon />
                    </Fab>
                    <Fab size='small' onClick={this.handleClickNext} disabled={this.state.nextPage == null ? true : false} color="primary" aria-label="add">
                        <SkipNextIcon />
                    </Fab>
                </div>
            );
        }


    }

    renderIngredients() {
        return (
            <div style={{}}>
                <h1 className={classes.title}>Ingredients</h1>
                {this.renderPagination()}
                <div style={{ overflowY: 'scroll', height: 600 }}>
                    {this.state.ingredients.map(ingredient => <Ingredient
                        key={ingredient.id} name={ingredient.name}
                        calories={ingredient.energy}
                        protein={ingredient.protein}
                        carbohydrates={ingredient.carbohydrates}
                        fats={ingredient.fat}
                        handleCalorieSelection={this.handleCalorieSelection} />)}
                </div>
            </div>
        );

    }

    renderCalorieCount() {
        var arrayCalories = this.state.ingredientsCart.map(({ calories }) => calories)
        var caloriesCount = arrayCalories.reduce((partial_sum, a) => partial_sum + a, 0);
        var caloriesCountString = String(caloriesCount);

        if (caloriesCount < 9) {
            caloriesCountString = "0" + caloriesCountString;
        }

        return (
            <Grid item sm={5} style={{ width: 200, height: 200, display: 'inline-block', padding: 20, alignItems: 'center' }}>
                <CircularProgressbarWithChildren
                    value={caloriesCount}
                    maxValue={2500}
                    styles={buildStyles({
                        pathColor: "#295c82",
                        trailColor: "#939ba3",
                    })} >
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong id="idCalorieCount" style={{ fontSize: 48, marginTop: -5 }}>{caloriesCountString}</strong>
                        <p style={{ textAlign: 'center' }}>kilocalories</p>
                    </div>
                </CircularProgressbarWithChildren>
            </Grid>
        )
    }

    renderCart() {
        return (
            <Grid item sm={7} style={{ display: 'inline-block', padding: 5 }}>
                <Button style={{ width: '100%' }} onClick={this.handleClickDeleteLastIngredient} variant="contained" color="primary">
                    Delete last selected ingredient
                </Button>
                <div style={{ padding: 5 }}></div>
                <Button style={{ width: '100%' }} onClick={this.handleClickUploadIngredients} variant="contained" color="primary">
                    Upload ingredients
                </Button>
                <IngredientCart cart={this.state.ingredientsCart} />
            </Grid>
        )
    }

    handleCalorieSelection = ingredient => {
        var updatedingredientsCart = [...this.state.ingredientsCart];
        updatedingredientsCart.push(ingredient);
        this.setState({
            ingredientsCart: updatedingredientsCart
        }, () => {
            /*
            Callback to execute some alert or announce to the user that one calorie from the ingredient was selected.
            */
            alertify.success('Ingredient selected')
        });
    }


    handleClickNext = () => {
        this.setState({
            loadingPagination: true
        })
        axios.get(this.state.nextPage)
            .then(response => {

                this.setState({
                    ingredients: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous,
                    loadingPagination: false
                });
            })
    }

    handleClickPrevious = () => {
        this.setState({
            loadingPagination: true
        })
        axios.get(this.state.previousPage)
            .then(response => {

                this.setState({
                    ingredients: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous,
                    loadingPagination: false
                });
            })
    }

    handleClickDeleteLastIngredient = () => {

        if (this.state.ingredientsCart.length === 0) {
            alertify.error('There are no selected ingredients')
        } else {
            var updatedingredientsCart = [...this.state.ingredientsCart];

            updatedingredientsCart.pop();
            this.setState({
                ingredientsCart: updatedingredientsCart
            }, () => {
                /*
                Callback to execute some alert or announce to the user
                */
                alertify.success('Ingredient removed')
                console.log(this.state.ingredientsCart);
            });
        }


    }

    handleClickUploadIngredients = () => {
        var calorieCountElement = document.getElementById("idCalorieCount").innerHTML
        if (this.state.ingredientsCart.length === 0) {
            alertify.error('There are no selected ingredients to upload')
        } else {

            if (calorieCountElement > 2500) {
                alertify.error('You exceeded the ideal quantity of kilocalories, please remove some ingredients to upload correctly.')
            } else {
                
                var uploadObject = {
                    uidUser: this.state.uidUser,
                    calorieCount: calorieCountElement,
                    ingredientsCart: this.state.ingredientsCart
                }
                this.props.uploadSelectedIngredients(uploadObject, ()=>{
                    alertify.success('Today ingredients uploaded correctly')
                })
                console.log(uploadObject)
            }
        }


    }

}

const mapDispatchToProps = dispatch => {
    return {
        uploadSelectedIngredients: (uploadData, onSuccessCallback) => dispatch(
            actionCreators.uploadSelectedIngredients(uploadData, onSuccessCallback)
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uidUser: state.firebaseStore.auth.uid,
        ingredientUpload : state.nutritionalStore.ingredientUpload
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nutritional);