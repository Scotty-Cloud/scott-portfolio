import React from "react";
import Contact from '../Contact/Contact'
import './Home.css'
import { Box, Container } from '@mui/material'

const Home = () => {
return (
  <>
    <Container className='home' maxWidth={false}>
      <Box sx={{ height: '100vh'}} className='home-page'>
        <h1>Hi! I'm Scotty</h1>
        <p>Software Engineer, Hamster Enthusiast, Designer</p>
        <Contact />
      </Box>
      </Container>  
  </>
)
}

export default Home