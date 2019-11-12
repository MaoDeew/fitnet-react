import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme =>({
  card: {
    maxWidth: 345,
    background: "#8db5e6",
  },
  media: {
    height: 140,
  },
  button:{
    background: "#a9d730",
  },
  textField:{
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
  },
  image: {
    width: 128,
    height: 128,
  },

  img: {
    margin:'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  
}));

var FullInformative = (props) => {
  const classes = useStyles();

  return (
      <div style={{padding: 5 + 'px'}}>
    <Paper className={classes.root} justify="center" alignItems="center" weight="50%">
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="overline" display = "block">
          {props.publishedDate}
        </Typography>
        <Grid item>
          <ButtonBase>
            <img style={{width: 100, height: 100}} alt="complex" src={props.src}/>
          </ButtonBase>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p" justify="left" alignItems="left">
        {props.content}
        </Typography>
        <TextField
            id="standard-basic"
            className={classes.textField}
            multiline='true'
            fullWidth='true'
            label="Comentarios"
            margin="normal"
        />
        <Grid container direction="row" justify="right" alignItems="right">
        <CardActions>
        <Button size="small" className={classes.button}>
          Compartir
        </Button>
      </CardActions>
      </Grid>
    </Paper>
    </div>
  );
}

export default withRouter(FullInformative);