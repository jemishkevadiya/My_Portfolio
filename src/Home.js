import React from "react";
import Navbar from "./components/Navbar";
import ComputersCanvas from "./components/ComputersCanvas";
import ShinyText from './components/ShinyText';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="header-container">
        <ShinyText text="Hi, I'm " speed={3} className="name" />
        <ShinyText text="Jemish" speed={3} className="jemish-name" /> 
        <p className="description">Software Developer | Passionate About Creating Innovative Solutions</p>
      </div>

      <div className="video-container">
        <video className="background-video" autoPlay loop muted style={{ playbackRate: 0.5 }}>
          <source src="/videos/homepageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="canvas-container">
        <ComputersCanvas />
      </div>

      <div className="scroll-button-container">
        <a href="#about">
          <div className="scroll-button">
            <div className="scroll-dot"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
