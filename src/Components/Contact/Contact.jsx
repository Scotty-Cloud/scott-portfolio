import React from 'react'
import { Box, Container,Grid, Tooltip, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import './Contact.css'

const Contact = () => {
  return (
    <Container className='contact' maxWidth={false} style={{background:'#272625'}}>
      <Box sx={{ height: '100vh'}} className='contact-page'>
        <Box borderBottom={1} pt={3}>Contact</Box>
        <Tooltip title="Github">
        <IconButton href='https://github.com/scotty-cloud'>
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton href='https://www.linkedin.com/in/scottyr/'>
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      </Box>
      </Container>

  )
}


export default Contact
