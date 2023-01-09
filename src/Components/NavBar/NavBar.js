import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";

export default function NavBar() {
  
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx={{backgroundColor:"#f57d00"}}>
        
        <Toolbar>
          <Link to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
                   <img src={require('../util/Images/2.png')} alt='icon' width='32px' height='32px' />
          </IconButton></Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , width:"80px" , height:"32px" }}>
          Blogger
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}