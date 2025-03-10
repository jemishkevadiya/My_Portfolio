import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ComputersCanvas from "./components/ComputersCanvas";
import ShinyText from "./components/ShinyText";
import "./Home.css";
import postmanIcon from "./components/assets/postman.png"; 

const Home = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [bodyType, setBodyType] = useState("raw");
  const [content, setContent] = useState(`{\n  "About": "Jemish Kevadiya"\n}`);
  const [responseContent, setResponseContent] = useState(null);
  const [isPretty, setIsPretty] = useState(false); 

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = () => {
    setShowSummary(true);
    const summary = `
Jemish Kevadiya is A highly skilled and versatile developer with expertise in computer programming, analysis, web development, and mobile development. With a solid foundation in DevOps and a practical application of data science, I have successfully delivered projects that span across multiple technologies. My proficiency in creating robust, scalable, and efficient solutions ensures that I contribute effectively to both frontend and backend development. Passionate about adopting modern development practices, I strive to optimize workflows, improve performance, and drive innovation in every project I undertake.
    `;
    setResponseContent(summary);
    if (isPretty) {
      const jsonData = {
        name: "Jemish Kevadiya",
        skills: [
          "computer programming",
          "analysis",
          "web development",
          "mobile development",
          "DevOps",
          "data science",
        ],
        experience: "delivered projects across multiple technologies",
        strengths: "robust, scalable, efficient solutions",
        focus: "frontend and backend development",
        passion: "modern development practices, workflow optimization, performance improvement, innovation",
      };
      setResponseContent(JSON.stringify(jsonData, null, 2));
    }
  };

  const handleBodyTypeChange = (e) => {
    const selectedType = e.target.value;
    setBodyType(selectedType);
    if (selectedType === "text") {
      setContent("About: Jemish Kevadiya");
    } else if (selectedType === "json") {
      setContent(`{\n  "About": "Jemish Kevadiya"\n}`);
    }
  };

  const handlePrettyChange = (e) => {
    const isChecked = e.target.checked;
    setIsPretty(isChecked);
    if (isChecked && responseContent) {
      const jsonData = {
        name: "Jemish Kevadiya",
        skills: [
          "computer programming",
          "analysis",
          "web development",
          "mobile development",
          "DevOps",
          "data science",
        ],
        experience: "delivered projects across multiple technologies",
        strengths: "robust, scalable, efficient solutions",
        focus: "frontend and backend development",
        passion: "modern development practices, workflow optimization, performance improvement, innovation",
      };
      setResponseContent(JSON.stringify(jsonData, null, 2));
    } else if (!isChecked && responseContent) {
      setResponseContent(`
Jemish Kevadiya is A highly skilled and versatile developer with expertise in computer programming, analysis, web development, and mobile development. With a solid foundation in DevOps and a practical application of data science, I have successfully delivered projects that span across multiple technologies. My proficiency in creating robust, scalable, and efficient solutions ensures that I contribute effectively to both frontend and backend development. Passionate about adopting modern development practices, I strive to optimize workflows, improve performance, and drive innovation in every project I undertake.
      `);
    }
  };

  return (
    <div className="page-container">
      <section className="hero-section">
        <Navbar />
        <div className="header-container">
          <ShinyText text="Hi, I'm " speed={3} className="name" />
          <ShinyText text="Jemish" speed={3} className="jemish-name" />
          <p className="description">
            Software Developer | Passionate About Creating Innovative Solutions
          </p>
        </div>

        <div className="video-container">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            style={{ playbackRate: 0.5 }}
          >
            <source src="/videos/homepageVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="canvas-container">
          <ComputersCanvas />
        </div>

        <div className="scroll-button-container">
          <div className="scroll-button-wrapper" onClick={handleScrollToAbout}>
            <div className="scroll-button">
              <div className="scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="postman-search-bar">
          <input
            type="text"
            placeholder="   GET    |   http://localhost:Jemish/AboutHim "
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Send
          </button>
        </div>

        <div className="postman-body-container">
          <div className="postman-body-header">Body</div>
          <div className="postman-body-options">
            <label>
              <input
                type="radio"
                name="body-type"
                value="raw"
                checked={bodyType === "raw"}
                onChange={handleBodyTypeChange}
              />
              raw
            </label>
            <select
              value={bodyType}
              onChange={handleBodyTypeChange}
              className="body-type-dropdown"
            >
              <option value="json">JSON</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className="postman-body-content">
            <pre className="postman-json-frame">{content}</pre>
          </div>
        </div>

        <div className="postman-response-container">
          <div className="postman-response-header">
            Response
            <label className="pretty-label">
              <input
                type="checkbox"
                checked={isPretty}
                onChange={handlePrettyChange}
              />
              .pretty
            </label>
          </div>
          <div className="postman-response-content">
            {responseContent ? (
              <pre className="postman-response-frame">{responseContent}</pre>
            ) : (
              <div className="response-placeholder">
                <img
                  src={postmanIcon}
                  alt="Postman Icon"
                  className="postman-icon"
                />
                <p>Click Send to get a response</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;