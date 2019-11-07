import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import classes from './SimpleMenuAccount.css'

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/authenticationAction'

const SimpleMenuAccount = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const firstPhoto = 'https://virtualgallery1-293846.c.cdn77.org/img_HTML/mr_nobody_new.svg';
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(){
    setAnchorEl(null);
  }

  function handleClickLogIn(){
    props.logIn()
    setAnchorEl(null);
  }

  function handleClickLogOut(){
    props.logOut()
    setAnchorEl(null);
  }

  return (
    <div>
      {console.log(props.isUserLoggedIn)}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        {props.isUserLoggedIn ? loadPhoto(props.photo) : loadPhoto(firstPhoto) }
      </IconButton>

      <Menu

        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

      {props.isUserLoggedIn ? renderSignOutButton(handleClickLogOut) : renderLoginButton(handleClickLogIn)}

      </Menu>

    </div>
  );
  
}

const renderLoginButton = (handleClickLogIn) =>{
  return(
    <MenuItem onClick={handleClickLogIn}>Log In</MenuItem>
  )
  
}

const renderSignOutButton = (handleClickLogOut) =>{
  return(
    <MenuItem onClick={handleClickLogOut}>Sign Out</MenuItem>
  )
}

const loadPhoto = (photo)=>{
    return(
      <Avatar alt="Remy Sharp" src={photo} className={classes.avatar} />
    )
}


const mapDispatchToProps = (dispatch) =>{
  return{
    logIn : () => dispatch(actionCreators.logInWithGoogle()),
    logOut : () => dispatch(actionCreators.logOutWithGoogle())
  }
}

const mapStateToProps = (state) =>{
  
  return{
    isUserLoggedIn : Boolean(state.firebaseStore.auth.uid),
    photo : state.firebaseStore.auth.photoURL,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMenuAccount);