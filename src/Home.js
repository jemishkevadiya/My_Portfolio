// Home.js
import React from "react";
import ComputersCanvas from "./components/ComputersCanvas"; 
import ShinyText from './components/ShinyText';  
import './Home.css'; 

const Home = () => {
  return (
    <div className="page-container">
      <div className="header-container">
        <ShinyText text="Hi, I'm Jemish" speed={3} className="name" />
        <ShinyText text="Web & Mobile Developer | Passionate About Creating" speed={4} className="description" />
      </div>
      
      {/* Video Section */}
      <div className="video-container">
        <video className="background-video" autoPlay loop muted style={{ playbackRate: 0.5 }}>
          <source src="/videos/homepageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="canvas-container">
        <ComputersCanvas />
      </div>
    </div>
  );
};

export default Home;
