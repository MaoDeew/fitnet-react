import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends Component {
  
    state = {
        open: false
    }

   handleClickOpen = () => {
    this.setState({
        open: true
    })
  };

   handleClose = () => {
    this.setState({
        open: false
    })
  };

  handleUpdate = () => {
    
  };


  render(){
    return ( 
        <div>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                {this.props.message}git 
            </Button>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                In the respective fields submit for the new height and weight
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="height"
                label="Height"
                type="height"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="weight"
                label="Weight"
                type="weight"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleUpdate} color="primary">
                Update
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  }
  
}

export default FormDialog;