import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import classes from './SimpleMenu.css'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>

        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
          </IconButton>      
   
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       
        <MenuItem onClick={handleClose}><Link className={classes.link} to='/'>Inicio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.link} to='/profile'>Perfil</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.link} to='/routines'>Generador de Rutinas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.link} to='/nutritional'>Información Nutricional</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.link} to='/'>Cerrar Sesión</Link></MenuItem>
         
      </Menu>
    </div>
  );
}