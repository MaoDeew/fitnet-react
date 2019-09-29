import React, { Component } from 'react';
import axios from './axiosInstance'
import NavBar from '../NavBar/NavBar';
import Routine from '../Routines/Routine'

import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

class Routines extends Component {

    state = {
        routines: [],
        loading: false,
        nextPage: null,
        previousPage: null
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
                <NavBar />
                <div>
                    {this.state.loading ? this.renderLoading() : this.renderRoutines()}
                </div>
            </div>
        );
    }

    renderLoading() {
        return (
            <div>
                <h1 style={{ display: 'inline-block', paddingRight: 24 }}>Loading Routines</h1> <CircularProgress />
            </div>
        );
    }

    renderRoutines() {
        return (
            <div>
                <h1 style={{ display: 'inline-block', paddingRight: 24 }}>List of Routines</h1>
               {this.renderPagination()}

                {this.state.routines.map(routine => <Routine key={routine.id} title={routine.name} description={routine.description} />)}

                {this.renderPagination()}
            </div>
        );
    }

    renderPagination(){
        return(
            <div style={{ display: 'inline-block'}}>
            
           <Fab onClick={this.handleClickPrevious} disabled={this.state.previousPage==null ? true: false} color="primary" aria-label="add" >
                <SkipPreviousIcon />
            </Fab>
            <Fab onClick={this.handleClickNext} disabled={this.state.nextPage==null ? true: false} color="primary" aria-label="add">
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

}

export default Routines;