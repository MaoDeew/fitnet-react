import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from './SimpleMenu';
import SimpleMenuAccount from './SimpleMenuAccount';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#295c82",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
}));



export default function NavBar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#295c82' }} position="static">
        <Toolbar>
          <SimpleMenu className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            FitNet
          </Typography>
          <SimpleMenuAccount className={classes.menuButton} />
        </Toolbar>
      </AppBar>
    </div>
  );
}