import React, { Component } from 'react';
import axios from './axiosInstance'
import Routine from '../Routines/Routine'

import classes from './Routines.css'

import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import * as alertify from 'alertifyjs';

class Routines extends Component {

    state = {
        routines: [],
        loading: false,
        nextPage: null,
        previousPage: null,
        routinesCart: [],
        selectedDays: [],
        selectedDay: null,
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
                    <Grid style={{ display: 'inline-block' }} item sm={5}>
                        {this.state.routines.map(routine => <Routine
                            key={routine.id}
                            id={routine.id}
                            title={routine.name}
                            description={routine.description}
                            handleRoutineSelection={this.handleRoutineSelection} />)}
                    </Grid>
                    <Grid style={{ display: 'inline-block' }} item sm={5}>

                        <DayPicker
                            selectedDays={this.state.selectedDays}
                            className={classes.calendar}
                            onDayClick={this.handleDayClick} />
                        {this.renderRoutineSelectedDay()}
                    </Grid>
                </Grid>
            </div>
        );
    }

    renderPagination() {
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

    renderRoutineSelectedDay() {
        if (this.state.routinesCart.length>0) {
            return (
                <Button onClick={this.handleClickSaveRoutines} variant="contained" color="primary" >
                Save Routines
                </Button>
            )
        }
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
        var dateRoutineSelection = document.getElementById('date' + routine.id).value;
        var year = dateRoutineSelection.split("-")[0];
        var month = dateRoutineSelection.split("-")[1];
        var day = dateRoutineSelection.split("-")[2];
        var dateSelected = new Date(year, month - 1, day)

        var updatedRoutinesCart = [...this.state.routinesCart];
        var updateSelectedDays = [...this.state.selectedDays];
        console.log(updatedRoutinesCart)
        console.log(updateSelectedDays)


        function isInArray(array, value) {
            return !!array.find(item => { return item.getTime() === value.getTime() });
        }


        if (!isInArray(this.state.selectedDays, dateSelected)) {
            updatedRoutinesCart.push({ routine, dateSelected });
            updateSelectedDays.push(dateSelected)

            this.setState({
                routinesCart: updatedRoutinesCart,
                selectedDays: updateSelectedDays
            }, () => {
                alertify.success('Routine selected')
            });
        } else {
            alertify.error('The date you selected has already a routine')
        }


    }

    handleDayClick = (day, { selected }) => {

        if (this.state.routinesCart.length === 0) {
            alertify.error('There are no routines uploaded to the Calendar')
        } else {
            this.setState({
                selectedDay: selected ? undefined : day,
            });

            var routineFinded = this.state.routinesCart.find((routine) => {
                return (routine.dateSelected.getDate() + '' + routine.dateSelected.getMonth() + '' + routine.dateSelected.getYear()) === (day.getDate() + '' + day.getMonth() + '' + day.getYear())
            })
            console.log(routineFinded)
            if (routineFinded !== undefined) {
                alertify
                    .alert("Title: "+routineFinded.routine.title+"       description: "+routineFinded.routine.description);
            }

        }


    }

    handleClickSaveRoutines = () =>{

    }
}

export default Routines;