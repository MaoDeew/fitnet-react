import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


export default function PersonalData(props) {
  const classes = useStyles();


  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
        id="outlined-read-only-input"
        label="Name"
        defaultValue={props.name}
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
      />

      <TextField
        id="outlined-read-only-input"
        label="Surname"
        defaultValue={props.surname}
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
      />

      <TextField
        id="outlined-read-only-input"
        label="E-mail"
        defaultValue={props.email}
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
      />

    <TextField
        id="outlined-read-only-input"
        label="Height (m)"
        defaultValue={props.height}
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
      />
    <TextField
        id="outlined-read-only-input"
        label="Weight (kg)"
        defaultValue={props.weight}
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant='outlined'
      />

    </form>
  );
}