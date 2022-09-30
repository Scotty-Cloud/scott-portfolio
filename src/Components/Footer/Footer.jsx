import React from 'react'
// import './Footer.css'
import { Container, Box } from '@mui/material'

const Footer = props => {
  return (
    <Box >
       <Container className='footer' maxWidth={false} style={{position:'absolute'}}>
          <Box textAlign="center" pt={{ xs: 5, sm: 1}} pb={{ xs: 5, sm: 0 }}>
            Made By Scotty &reg; {new Date().getFullYear()}
          </Box>
        </Container>
    </Box>
  )
}

export default Footer