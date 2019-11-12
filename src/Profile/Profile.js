import React, { Component } from 'react';
import classes from '../Profile/Profile.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonalData from './PersonalData';
import FormDialog from './FormDialog';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { Slider } from '@material-ui/core';

function valuetext(value){
    return `${value}Kg`;
}

const marks =[
    {
        value: 18.5,
        label: '18.5',
    },
    {
        value: 24.9,
        label: '24.9',
    },
    {
        value: 29.9,
        label: '29.9',
    },
    {
        value: 50,
        label: '50',
    },
];

class Profile extends Component {
    
    state = {
        name: this.props.name,
        surname: this.props.surname,
        email: this.props.email,
        height: this.props.height,
        weight: this.props.weight,
        avatar: this.props.avatar,
        bmi : 0
    }

    handleClickCalculateBMI = () => {
        var bmiCalculation = ((this.state.weight)/(this.state.height*this.state.height)).toFixed(2)
        this.setState({
            bmi: bmiCalculation
        })
      };

    renderAdvice(){
        return(
            <p>It seems that the account is new, fill the fields of height and weight to complete the registration to FitNet</p>
        )
    }

    renderBMIResult(){

        if (this.state.bmi===0) {
            return null;
        }

        if (this.state.bmi<18.5) {
            return(
                <div style={{padding: 20 }}>
                  Your BMI is {this.state.bmi} and you are underweight                          
                </div>
            )
        }
        if (this.state.bmi>=18.5 && this.state.bmi<24.9) {
            return(
                <div style={{padding: 20 }}>
                  Your BMI is {this.state.bmi} and you have normal weight                          
                </div>
            )
        }
        if (this.state.bmi>=24.9 && this.state.bmi<29.9) {
            return(
                <div style={{padding: 20 }}>
                  Your BMI is {this.state.bmi} and you are overweight                          
                </div>
            )
        }
        if (this.state.bmi>=29.9) {
            return(
                <div style={{padding: 20 }}>
                  Your BMI is {this.state.bmi} and you have obesity                          
                </div>
            )
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <h1>Your FitNet Profile</h1>
                    <div>
                        <Grid container spacing={3}>

                            <Grid className={classes.gridAvatar} item xs={5}>
                                <Paper>
                                    <img alt='profilePhoto' className={classes.avatar} src={this.state.avatar} />
                                </Paper>
                            </Grid>

                            <Grid item xs={7}>
                                <Paper>
                                    
                                        <PersonalData
                                        name={this.state.name}
                                        surname={this.state.surname}
                                        email={this.state.email}
                                        height={this.state.height}
                                        weight={this.state.weight} />
                                    
                                    
                                    <div className={classes.slider} >
                                            <Typography style={{paddingBottom: 40}} id="track-bmi" gutterBottom>
                                                BMI Results
                                            </Typography>
                                            <Slider 
                                                color='primary'
                                                track="inverted"
                                                aria-labelledby="track-nverted-slider"
                                                getAriaValueText={valuetext}
                                                defaultValue={0}
                                                value={this.state.bmi}
                                                marks={marks}
                                                max={50}
                                                valueLabelDisplay="on"
                                            />
                                        </div>
                                      {this.renderBMIResult()}
                                               
                                </Paper>
                                <div style={{paddingTop: 7}}>
                                <Paper className={classes.paperButtons} >
                                {this.state.height === 0 && this.state.weight === 0 ? this.renderAdvice() : null}
                               
                                    <div className={classes.buttonSeparator}>
                                    <FormDialog message= {this.state.height === 0 && this.state.weight === 0 ? 'edit height and weight' : 'edit personal information'} />
                                    </div>
                                    
                                    <Button onClick={this.handleClickCalculateBMI} variant="contained" color="primary" >
                                        Calculate BMI
                                    </Button>
                                </Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
      name : state.firebaseStore.profile.name,
      surname : state.firebaseStore.profile.surname,
      email : state.firebaseStore.profile.email,
      height : state.firebaseStore.profile.height,
      weight : state.firebaseStore.profile.weight,
      avatar : state.firebaseStore.auth.photoURL
    }
  }

export default connect(mapStateToProps)(Profile);
