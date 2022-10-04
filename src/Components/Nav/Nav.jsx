import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from '@mui/material/Link'

const Nav = () => {
  return (
    <header className="navbar">
      <Box sx={{ flexGrow: 1}} className='inline-nav'>
          <Toolbar variant='dense' className="nav-buttons">            
            <Link className='nav-link' underline="none" style={{color:'#272625', fontSize: '25px'}} href="/">
              Home
            </Link>
            </Toolbar>    
      </Box>
    </header>
   )
}

export default Nav;