import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classesCss from './Routine.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import DatePicker from './DatePicker'

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  }, media: {
    height: 140,
    maxWidth: '50%',
  }
}));

var Routine = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const imageRoutine = 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg';
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = () => {
    props.handleRoutineSelection(props)
  };

  return (
    <div className={classesCss.root}>
      <ExpansionPanel  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>

        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails >
          
          <Typography className={classesCss.rezise}>
            {props.description.replace('<p>', '').replace('</p>', '')}
          </Typography>
          <img
            alt={props.key}
            className={classesCss.resizeImage}
            src={imageRoutine}
          />
        </ExpansionPanelDetails>
        <div className={classesCss.button}>
          <Button onClick={handleClick} variant="contained" color="primary" >
          Add Routine
          </Button>
          <DatePicker id={props.id}/>
        </div>
        
      </ExpansionPanel>

    </div>
  );
}

export default Routine;