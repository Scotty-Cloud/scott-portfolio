import React from 'react';
import './Projects.css';
import ProjectDisplay from './ProjectDisplay';
import PokeDex from "../../assets/PokeDex.png"
import Enso from "../../assets/Enso.png";
import LFG from "../../assets/LFG.png";
import WHO from "../../assets/WHO.png";
import PokemonMemoryGame from "../../assets/PokemonMemoryGame.png";
import PinkCadillac from "../../assets/PinkCadillac.png";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { EnergySavingsLeafOutlined } from '@mui/icons-material';

const Projects = (props) => {
  return (
    <Container
      maxWidth={false}
      className="projects"
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: '100vh'}}
    >
      <div className="title">
        <h2 style={{ fontSize: "3rem", color: "", padding:'1.5rem' }}>My Work</h2>
      </div>
      <Box x={{ flexGrow: 1 }}className="displayCard">
      <ProjectDisplay
          img={PokeDex}
          alt="img of Pokedex"
          title="PokeDex"
          description=""
          deployment=""
          github=""
        />
      <ProjectDisplay
          img={Enso}
          alt="img of Enso"
          title="Enso"
          description="Feeling down and want positive messages? Or simply just looking for new quotes to spread joy, This Discord Bot has it all. Use Slash Commands to recieve joyful messages to uplift your mood!"
          deployment="https://github.com/Scotty-Cloud/Enso"
          github="https://github.com/Scotty-Cloud/Enso"
        />
      <ProjectDisplay
          img={LFG}
          alt="img of LFG"
          title="LFG"
          description="Looking For Group or LFG for short, is a MERN stack application that is community-based for sharing your favorite games and nerdy opinions online. Its also a great place to meet new people in safe spaces!"
          deployment="https://lfgpls.herokuapp.com//"
          github="https://github.com/Scotty-Cloud/lfg"
        />
        <ProjectDisplay
          img={WHO}
          alt="img of WHO"
          title="Wanna Hammy Out"
          description="Wanna Hammy Out? This is a MEN stack application used to learn about hamsters and the basic necessities to care for your little furry friend. You can also share favorite hamster foods and toys so others can see!"
          deployment="https://wanna-hammy-out.herokuapp.com/"
          github="https://github.com/Scotty-Cloud/wanna-hammy-out"
        />
        <ProjectDisplay
          img={PokemonMemoryGame}
          alt="img of PMG"
          title="Find That Unown"
          description="A memory game themed off of pokemon. Flip the cards to find all the matching Unown Pokemons before the timer runs out. Built utilizing HTML, CSS and Vanilla JavaScript"
          deployment="https://pokemonunown.netlify.app/"
          github="https://github.com/Scotty-Cloud/Pokemon-Memory-Game"
        />
        <ProjectDisplay
          img={PinkCadillac}
          alt="img of PC"
          title="Pink Cadillac"
          description="For all things Elvis Presley related this application allows users to share all their favorite songs and movies that the king of Rock N'Roll starred in."
          deployment="https://graceland-movies.herokuapp.com/"
          github="https://github.com/Scotty-Cloud/pinkcadillac"
        />
      </Box>
    </Container>
  );
};

export default Projects;
