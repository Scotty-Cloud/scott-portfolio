import React from "react";
import './Landing.css'
import cloudTop from "../../assets/cloudTop.png";
import cloudBottom from "../../assets/cloudBottom.png";
import Contact from '../Contact/Contact'

const Landing = () => {
  return (
    <div className="landing">
      <div className="welcome">
        <h1>Hi! I'm Scotty</h1>
        <p>Software Engineer, Hamster Enthusiast, Designer</p>
      <Contact />
      </div>
    </div>
  )
}

export default Landing;

// text-align: center;
// background: rgba( 255, 255, 255, 0.3 );
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 5px );
// -webkit-backdrop-filter: blur( 5px );
// border-radius: 10px;
// border: 1px solid rgba( 255, 255, 255, 0.18 );