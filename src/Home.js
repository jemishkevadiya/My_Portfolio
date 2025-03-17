import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ComputersCanvas from "./components/ComputersCanvas";
import ShinyText from "./components/ShinyText";
import GlassIcons from "./components/GlassIcons";
import "./Home.css";
import postmanIcon from "./components/assets/postman_icon.png";
import RollingGallery from "./components/RollingGallery";
import certificate1 from "./components/assets/fullStack_development_ss.jpg";
import certificate2 from "./components/assets/dean_letter.jpg";
import certificate3 from "./components/assets/ReactNative_certificate.jpg";
import emailjs from "@emailjs/browser";

import jsIcon from "./components/assets/javascript.svg";
import javaIcon from "./components/assets/java.svg";
import htmlIcon from "./components/assets/html.svg";
import cssIcon from "./components/assets/css.svg";
import csharpIcon from "./components/assets/cSharp.svg";
import pythonIcon from "./components/assets/python.svg";
import swiftIcon from "./components/assets/swift.svg";
import mongodbIcon from "./components/assets/mongodb.svg";
import sqlIcon from "./components/assets/sql.png";
import postgresqlIcon from "./components/assets/postgresql.svg";
import devopsIcon from "./components/assets/devops.png";
import postman from "./components/assets/postman.svg";
import xcode from "./components/assets/xcode.svg";
import docker from "./components/assets/docker.svg";
import reactNative from "./components/assets/reactNative.svg";
import reactNativeIcon from "./components/assets/reactNative.svg";
import github from "./components/assets/github.svg";
import linkedin from "./components/assets/linkedin.svg";
import resumeIcon from "./components/assets/resume.svg";
import coverLetterIcon from "./components/assets/cover-letter.svg";
import firebaseIcon from "./components/assets/firebase.svg"
import bootstrapIcon from "./components/assets/bootstrap.svg"

const Home = () => {
  const [bodyType, setBodyType] = useState("raw");
  const [content, setContent] = useState(`{\n  "About": "Jemish Kevadiya"\n}`);
  const [responseContent, setResponseContent] = useState(null);
  const [isPretty, setIsPretty] = useState(false);
  const [flipped, setFlipped] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const mouseX = e.clientX - centerX;
        const maxRotate = 45;
        const rotate = (mouseX / rect.width) * maxRotate;
        projectRef.current.style.transform = `rotateY(${rotate}deg)`;
      }
    };

    const projectSection = projectRef.current;
    if (projectSection) {
      projectSection.addEventListener("mousemove", handleMouseMove);
      projectSection.addEventListener("mouseleave", () => (projectRef.current.style.transform = "rotateY(0deg)"));
    }

    return () => {
      if (projectSection) {
        projectSection.removeEventListener("mousemove", handleMouseMove);
        projectSection.removeEventListener("mouseleave", () => (projectRef.current.style.transform = "rotateY(0deg)"));
      }
    };
  }, []);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    const summary = `
Jemish Kevadiya is a highly skilled and versatile developer with expertise in computer programming, analysis, web development, and mobile development. With a solid foundation in DevOps and a practical application of data science, he has successfully delivered projects that span across multiple technologies. His proficiency in creating robust, scalable, and efficient solutions ensures that he contribute effectively to both frontend and backend development. Passionate about adopting modern development practices, he strive to optimize workflows, improve performance, and drive innovation in every project he undertake.
    `;
    setResponseContent(summary);
    if (isPretty) {
      const jsonData = {
        name: "Jemish Kevadiya",
        skills: ["computer programming", "analysis", "web development", "mobile development", "DevOps", "data science"],
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
    if (selectedType === "text") setContent("About: Jemish Kevadiya");
    else if (selectedType === "json") setContent(`{\n  "About": "Jemish Kevadiya"\n}`);
  };

  const handlePrettyChange = (e) => {
    const isChecked = e.target.checked;
    setIsPretty(isChecked);
    if (isChecked && responseContent) {
      const jsonData = {
        name: "Jemish Kevadiya",
        skills: ["computer programming", "analysis", "web development", "mobile development", "DevOps", "data science"],
        experience: "delivered projects across multiple technologies",
        strengths: "robust, scalable, efficient solutions",
        focus: "frontend and backend development",
        passion: "modern development practices, workflow optimization, performance improvement, innovation",
      };
      setResponseContent(JSON.stringify(jsonData, null, 2));
    } else if (!isChecked && responseContent) {
      setResponseContent(`
Jemish Kevadiya is a highly skilled and versatile developer with expertise in computer programming, analysis, web development, and mobile development. With a solid foundation in DevOps and a practical application of data science, I have successfully delivered projects that span across multiple technologies. My proficiency in creating robust, scalable, and efficient solutions ensures that I contribute effectively to both frontend and backend development. Passionate about adopting modern development practices, I strive to optimize workflows, improve performance, and drive innovation in every project I undertake.
      `);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    emailjs
      .sendForm("service_9n76q29", "template_wvq3sms", e.target, "4dBYmsUpvvRR57vhp")
      .then(
        (result) => {
          emailjs
            .send("service_9n76q29", "template_auto_reply", formData, "4dBYmsUpvvRR57vhp")
            .then(
              () => {
                setSubmitStatus("success");
                e.target.reset();
              },
              (error) => {
                setSubmitStatus("success");
                e.target.reset();
                console.error("Auto-reply failed:", error.text);
              }
            );
        },
        (error) => {
          setSubmitStatus("error");
          console.error("Original email failed:", error.text);
        }
      );
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const skills = [
    { icon: <img src={jsIcon} alt="JavaScript" className="skill-icon" />, label: "JavaScript", color: "#222" },
    { icon: <img src={javaIcon} alt="Java" className="skill-icon" />, label: "Java", color: "#222" },
    { icon: <img src={htmlIcon} alt="HTML" className="skill-icon" />, label: "HTML", color: "#222" },
    { icon: <img src={cssIcon} alt="CSS" className="skill-icon" />, label: "CSS", color: "#222" },
    { icon: <img src={bootstrapIcon} alt="BootStrap" className="skill-icon" />, label: "BootStrap", color: "#222" },
    { icon: <img src={reactNative} alt="ReactNative" className="skill-icon" />, label: "React", color: "#222" },
    { icon: <img src={csharpIcon} alt="C#" className="skill-icon" />, label: "C#", color: "#222" },
    { icon: <img src={pythonIcon} alt="Python" className="skill-icon" />, label: "Python", color: "#222" },
    { icon: <img src={swiftIcon} alt="Swift" className="skill-icon" />, label: "Swift", color: "#222" },
    { icon: <img src={mongodbIcon} alt="MongoDB" className="skill-icon" />, label: "MongoDB", color: "#222" },
    { icon: <img src={sqlIcon} alt="SQL" className="skill-icon" />, label: "SQL", color: "#222" },
    { icon: <img src={postgresqlIcon} alt="PostgreSQL" className="skill-icon" />, label: "PostgreSQL", color: "#222" },
    { icon: <img src={devopsIcon} alt="DevOps" className="skill-icon" />, label: "DevOps", color: "#222" },
    { icon: <img src={docker} alt="Docker" className="skill-icon" />, label: "Docker", color: "#222" },
    { icon: <img src={firebaseIcon} alt="FireBase" className="skill-icon" />, label: "FireBase", color: "#222" },
    { icon: <img src={xcode} alt="Xcode" className="skill-icon" />, label: "Xcode", color: "#222" },
    { icon: <img src={postman} alt="Postman" className="skill-icon" />, label: "Postman", color: "#222" },
    { icon: <img src={github} alt="GitHub" className="skill-icon" />, label: "GitHub", color: "#222" },
    
  ];

  const professionalProject = {
    title: "XploreOn Web App",
    description:
      "A comprehensive travel booking web application integrating Booking.com APIs with a custom itinerary generator. This capstone project features a responsive UI built with React, a robust backend using Node.js and MongoDB, and real-time data syncing for flight, hotel, and activity bookings. Key functionalities include user authentication, personalized travel recommendations, and an interactive map interface. Developed as part of a professional academic project, it showcases my ability to manage full-stack development, API integration, and deployment workflows.",
    technologies: [jsIcon, reactNativeIcon, mongodbIcon, firebaseIcon],
    githubLink: "https://github.com/jemishkevadiya/XploreOn_Frontend/tree/jemish",
  };

  const personalProjects = [
    {
      title: "XploreOn Mobile App",
      description: "XploreOn Mobile App is a travel platform that allows users to search and book flights, hotels, car rentals, and restaurants. It provides real-time data from various APIs, helping users plan and manage their trips easily through an intuitive and user-friendly interface.",
      technologies: [jsIcon, reactNativeIcon],
      githubLink: "https://github.com/jemishkevadiya/XploreOn_MobileApp/tree/jemish",
    },
    {
      title: "Flashify",
      description: "This project allows users to create and organize flashcards manually in folders, generate flashcards using AI based on a chosen topic or text, and interact with the flashcards through AI for enhanced learning and revision.",
      technologies: [reactNativeIcon],
      githubLink: "https://github.com/Deep1454/Flashify",
    },
    {
      title: "Shopping Cart",
      description: "The Shopping List App is a SwiftUI iOS app using Core Data to manage shopping lists. Users can create categories with custom tax rates, add items, and generate invoices",
      technologies: [swiftIcon, xcode],
      githubLink: "https://github.com/jemishkevadiya/Shopping_List_App",
    },
    {
      title: "Chat App",
      description: "A simple chat app with JWT-based user login and group chat. Features secure authentication, CORS support, and a responsive interface. Built with Node.js, Express.js, JWT, cors (backend), and HTML/CSS, JavaScript, Bootstrap (frontend), with optional MongoDB/Mongoose for data storage.",
      technologies: [htmlIcon, bootstrapIcon, cssIcon],
      githubLink: "https://github.com/jemishkevadiya/chat_app",
    },
  ];

  return (
    <div className="page-container">
      <section className="hero-section">
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
          <div className="scroll-button-wrapper" onClick={handleScrollToAbout}>
            <div className="scroll-button">
              <div className="scroll-dot"></div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://github.com/jemishkevadiya" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={github} alt="GitHub" className="social-icon-img" />
          </a>
          <a href="https://www.linkedin.com/in/jemish2327/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={linkedin} alt="LinkedIn" className="social-icon-img" />
          </a>
        </div>
        <div className="download-icons">
          <a href="/Jemish_Resume.pdf" download="Jemish_Kevadiya_Resume.pdf" className="download-icon">
            <img src={resumeIcon} alt="Download Resume" className="download-icon-img" />
          </a>
          <a href="/cover_letter(portfolio).pdf" download="Jemish_Kevadiya_Cover_Letter.pdf" className="download-icon">
            <img src={coverLetterIcon} alt="Download Cover Letter" className="download-icon-img" />
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="postman-search-bar">
          <input type="text" placeholder="   GET    |   http://localhost:JemishKevadiya/AboutHim " className="search-input" />
          <button onClick={handleSearch} className="search-button">Send</button>
        </div>
        <div className="postman-body-container">
          <div className="postman-body-header">Body</div>
          <div className="postman-body-options">
            <label>
              <input type="radio" name="body-type" value="raw" checked={bodyType === "raw"} onChange={handleBodyTypeChange} />
              raw
            </label>
            <select value={bodyType} onChange={handleBodyTypeChange} className="body-type-dropdown">
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
              <input type="checkbox" checked={isPretty} onChange={handlePrettyChange} />
              .pretty
            </label>
          </div>
          <div className="postman-response-content">
            {responseContent ? (
              <pre className="postman-response-frame">{responseContent}</pre>
            ) : (
              <div className="response-placeholder">
                <img src={postmanIcon} alt="Postman Icon" className="postman-icon" />
                <p>Click Send to get a response</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills & Tools</h2>
        <GlassIcons items={skills} className="skills-grid" />
      </section>

      <section id="certificates-section" className="certificates-section">
        <h2 className="section-title">Certificates & Awards</h2>
        <RollingGallery
          autoplay={true}
          pauseOnHover={true}
          images={[certificate1, certificate2, certificate3, certificate1, certificate2, certificate3]}
        />
      </section>

      <section id="projects" className="projects-section" ref={projectRef}>

        <div className="professional-project">
          <h3 className="subsection-title">Professional Project</h3>
          <motion.div
            className="professional-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h4>{professionalProject.title}</h4>
            <p>{professionalProject.description}</p>
            <div className="tech-stack">
              {professionalProject.technologies.map((tech, i) => (
                <img key={i} src={tech} alt="tech" className="tech-icon" />
              ))}
            </div>
            <a href={professionalProject.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
              View on GitHub
            </a>
          </motion.div>
        </div>

        <div className="personal-projects">
          <h3 className="subsection-title">Latest Projects</h3>
          <div className="neon-card-gallery">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                className="neon-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                onClick={() => setFlipped(flipped === index ? null : index)}
              >
                <motion.div
                  className="card-inner"
                  animate={{ rotateY: flipped === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="card-front">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="card-back">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech, i) => (
                        <img key={i} src={tech} alt="tech" className="tech-icon" />
                      ))}
                    </div>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
                      View on GitHub
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <p className="guideline">Click a card to flip and view details</p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm excited to collaborate on innovative projects. Reach out to discuss how we can create something amazing together.
            </p>
            <ul className="contact-details">
              <li><span className="contact-icon">📞</span> +1 (226)-202-2327</li>
              <li><span className="contact-icon">📧</span> jemish2327@gmail.com</li>
              <li><span className="contact-icon">📍</span> Toronto, Ontario, CA.</li>
              <li className="contact-social-links">
                <a href="https://github.com/jemishkevadiya" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src={github} alt="GitHub" className="social-icon-img" />
                </a>
                <a href="https://www.linkedin.com/in/jemish2327/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src={linkedin} alt="LinkedIn" className="social-icon-img" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
              {submitStatus === "success" && (
                <p className="submit-success">
                  Thank you for reaching out! Your message has been successfully sent. I’ll get back to you soon. 😊
                </p>
              )}
              {submitStatus === "error" && (
                <p className="submit-error">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
        <div className="back-to-top">
          <button onClick={handleScrollToTop} className="back-to-top-button" aria-label="Back to Top">↑</button>
        </div>
      </section>
    </div>
  );
};

export default Home;