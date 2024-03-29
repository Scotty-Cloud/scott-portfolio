import React from 'react'
import './Contact.css'
import { Box, Container, Tooltip, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container className='contact' maxWidth={false}>
      <Box textAlign="center" pt={{ xs: 3, sm: 1}} pb={{ xs: 1, sm: 0 }} className='contact-page'>
        <div className="contact-me">
        <Box  pt={3}>Contact</Box>
        </div>
        <Tooltip title="GitHub">
        <IconButton href='https://github.com/scotty-cloud' target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton href='https://www.linkedin.com/in/scottadamr/' target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Email">
        <IconButton href='mailto: scottadamr01@gmail.com'>
          <EmailIcon />
        </IconButton>
      </Tooltip>
      </Box>
      </Container>

  )
}

export default Contact