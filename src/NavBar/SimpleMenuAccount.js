import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import classes from './SimpleMenuAccount.css'

export default function SimpleMenuAccount(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>

      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.avatar} />
      </IconButton>

      <Menu

        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Log In</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>

      </Menu>

    </div>
  );
}