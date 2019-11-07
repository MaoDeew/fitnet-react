import React, { Component } from 'react';
import classes from '../Profile/Profile.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonalData from './PersonalData';

class Profile extends Component {

    state = {
        name: 'Andy',
        surname: 'Newman',
        email: 'asfsfaf@gmail.com',
        height: 1.75,
        weight: 66,
        avatar: 'https://www.eharmony.com/blog/wp-content/uploads/2010/04/eHarmony-Blog-profile-picture.jpg'
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Your FitNet Profile</h1>
                    <div>
                        <Grid container spacing={3}>

                            <Grid className={classes.gridAvatar} item xs={5}>
                                <Paper>
                                    <img alt='profilePhoto' className={classes.avatar} src={this.state.avatar} />
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span" className={classes.buttonImage}>
                                            Upload Profile Image
                                        </Button>
                                    </label>
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
                                </Paper>
                                <div style={{paddingTop: 7}}>
                                <Paper className={classes.paperButtons} >
                                    <Button variant="contained" color="primary" >
                                        Edit Personal Information
                                    </Button>
                                    <div className={classes.buttonSeparator}></div>
                                    <Button variant="contained" color="primary" >
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

export default Profile;
