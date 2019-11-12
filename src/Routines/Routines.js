import React, { Component } from 'react';
import axios from './axiosInstance'
import Routine from '../Routines/Routine'

import classes from './Routines.css'

import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';

import * as alertify from 'alertifyjs';

class Routines extends Component {

    state = {
        routines: [],
        loading: false,
        nextPage: null,
        previousPage: null,
        routinesCart: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios.get("/exercise/?language=2&status=2")
            .then(response => {
               
                this.setState({
                    routines: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous
                });
            })

    }

    render() {
        
        return (
            <div>
                <div>
                    {this.state.loading ? this.renderLoading() : this.renderRoutines()}
                </div>
            </div>
        );
    }

    renderLoading() {
        return (
            <div>
                <h1 className={classes.title}>Loading Routines</h1> <CircularProgress />
            </div>
        );
    }

    renderRoutines() {
        return (
            <div>
            <h1 className={classes.title}>List of Routines</h1>
            {this.renderPagination()}
            <Grid container>
                <Grid style={{display : 'inline-block'}} item sm={5}> 
                {this.state.routines.map(routine => <Routine 
                key={routine.id}
                id={routine.id} 
                title={routine.name} 
                description={routine.description}
                handleRoutineSelection={this.handleRoutineSelection} />)}
                </Grid>
                <Grid style={{display : 'inline-block'}} item sm={5}>
                aaaaaaaaaaaaaaaaaaaaaaa
                </Grid>
            </Grid>
            {this.renderPagination()}
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

     handleClickNext = () => {
        axios.get(this.state.nextPage)
            .then(response => {
                
                this.setState({
                    routines: response.data.results,
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
                    routines: response.data.results,
                    loading: false,
                    nextPage: response.data.next,
                    previousPage: response.data.previous
                });
            })
      }

      handleRoutineSelection = routine => {
        var dateRoutineSelection = document.getElementById('date'+routine.id).value;
        
        var updatedRoutinesCart = [...this.state.routinesCart];
        console.log(updatedRoutinesCart)
        updatedRoutinesCart.push({routine, dateRoutineSelection});
        this.setState({
            routinesCart: updatedRoutinesCart
        }, () => {
            alertify.success('Routine selected')
        });
    }

}

export default Routines;