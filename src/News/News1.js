import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ThemeProvider } from '@material-ui/styles';

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

var News = (props) => {
  const classes = useStyles();

  return (
      <div style={{padding: 5 + 'px'}}>
    <Paper className={classes.root} justify="center" alignItems="center" weight="50%">
        <Typography gutterBottom variant="h5" component="h2">
          NOTICIA
        </Typography>
        <Typography gutterBottom variant="overline" display = "block">
          21 de Novimebre de 2019
        </Typography>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="1.jpg"/>
          </ButtonBase>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p" justify="left" alignItems="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque neque ac augue maximus, ac egestas augue pellentesque. Nullam consequat faucibus orci. Donec ut vulputate ipsum. Ut posuere diam ut odio venenatis dapibus. Ut mattis sapien in enim pharetra sagittis. Fusce vel lectus pretium, auctor ligula ut, efficitur neque. Quisque tincidunt metus nec est molestie, eget interdum felis sodales. Quisque porta nunc tortor. Fusce placerat metus vitae tristique vulputate. Donec tempor facilisis ipsum eget semper. Phasellus vitae mollis nulla, ut volutpat tortor. Pellentesque hendrerit nunc finibus pulvinar aliquam. Vivamus ultricies vehicula orci, quis egestas sapien dignissim nec. Aliquam mollis ante eget tortor placerat interdum. Nunc volutpat arcu bibendum viverra volutpat.
        </Typography>
        <TextField
            id="standard-basic"
            className={classes.textField}
            label="Comentarios"
            margin="normal"
        />
        <Grid container direction="row" justify="right" alignItems="right">
        <CardActions>
        <Button size="small" className={classes.button}>
          Compartir
        </Button>
        <Button size="small" className={classes.button}>
          Ver más
        </Button>
      </CardActions>
      </Grid>
    </Paper>
    </div>
  );
}

export default News;