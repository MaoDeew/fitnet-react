import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    background: "#8db5e6",
  },
  media: {
    height: 140,
  },
  button:{
    background: "#a9d730",
  }
  
});

var Informative = (props) => {
  const classes = useStyles();

  return (
      <div style={{padding: 5 + 'px'}}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid container direction="row" justify="center" alignItems="center">
      <CardActions>
        <Button size="small" className={classes.button}>
          Compartir
        </Button>
        <Button size="small" className={classes.button}>
          Ver más
        </Button>
      </CardActions>
      </Grid>
    </Card>
    </div>
  );
}

export default Informative;

