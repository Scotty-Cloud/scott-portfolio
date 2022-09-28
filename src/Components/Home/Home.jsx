import React from "react";
import './Home.css'
import { Box, Container} from '@mui/material'

const Home = () => {
return (
  <>
    <Container className='home' maxWidth={false} style={{background:'#272625'}}>
      <Box sx={{ height: '100vh'}} className='home-page'>
        <h1>Hi! I'm Scotty</h1>
        <p>Software Engineer, Hamster Enthusiast, Designer</p>
      </Box>
      </Container>  
  </>
)
}

export default Home