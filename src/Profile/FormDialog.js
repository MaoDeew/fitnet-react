import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/profileAction';

class FormDialog extends Component {
  
    state = {
        open: false,
        height : 0,
        weight: 0,
        uidUser : this.props.uidUser,
        redirect : false
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

  handleSubmitUpdate = () => {
      var updateData = {
          height : this.state.height,
          weight : this.state.weight,
          uidUser : this.state.uidUser
      }

    this.props.updateWeigtAndHeight(updateData, ()=>{
        this.handleClose()
        this.setState({
          redirect : true
        })
    });

  };

  updateDataInfo = (event, type) => {
    var updateDataInfo = {
        ...this.state
    }

    updateDataInfo[type] = event.target.value;

    this.setState({
        height: updateDataInfo.height,
        weight: updateDataInfo.weight
    });
}

    renderRedirect(){
      return(
        <Redirect to='/profile' />
      )
    }


  render(){
    return ( 
        <div>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                {this.props.message} 
            </Button>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Weight and Height</DialogTitle>
            <DialogContent>
              <DialogContentText>
                In the respective fields submit for the new height and weight
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="height"
                label="Height (m)"
                type="height"
                fullWidth
                onChange={(event) => { this.updateDataInfo(event, 'height') }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="weight"
                label="Weight (kg)"
                type="weight"
                fullWidth
                onChange={(event) => { this.updateDataInfo(event, 'weight') }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmitUpdate} color="primary">
                Update
              </Button>
            </DialogActions>
          </Dialog>
          {this.state.redirect ? this.renderRedirect() : null}
        </div>
      );
  }
  
}

const mapDispatchToProps = dispatch => {
    return {
        updateWeigtAndHeight: (updateData, onSuccessCallback) => dispatch(
            actionCreators.updateProfileData(updateData, onSuccessCallback)
        )
    }
}

const mapStateToProps = (state) => {
    return{
        uidUser : state.firebaseStore.auth.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);