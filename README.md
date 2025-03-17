Jemish Kevadiya's Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and professional journey as a software developer passionate about creating innovative solutions. Built with a modern tech stack and a sleek, neon-accented design, this portfolio highlights my expertise in full-stack development, mobile apps, and DevOps.

Table of Contents
- Features
- Tech Stack
- Installation
- Usage
- Project Structure
- Contact

Features
- Hero Section: Dynamic introduction with a background video, animated text using ShinyText, and a 3D computer model via ComputersCanvas.
- About Section: Interactive Postman-inspired interface to fetch and display my bio in JSON or text format.
- Skills & Tools: Glassmorphism-style icons showcasing my technical proficiencies.
- Certificates & Awards: A rolling gallery of my achievements with hover effects.
- Projects Showcase:
  - Professional Project: Detailed display of my capstone "XploreOn Web App" with an extended description.
  - Personal Projects: Neon card flip gallery with a 2-1 grid layout for four projects, featuring flip animations and GitHub links.
- Contact Section: Form with EmailJS integration for inquiries, plus social links and a back-to-top button.
- Downloadable Assets: Resume and cover letter available for direct download via icons in the hero section.

Tech Stack
- Frontend: React, Framer Motion (animations), Three.js (3D canvas)
- Styling: Custom CSS with a dark theme, neon accents, and responsive design
- Assets: Custom icons, background video, certificate images
- Build Tool: Vite (assumed; adjust if you used Create React App or another tool)

Installation
- To run this portfolio locally, follow these steps:

- Clone the Repository:
  git clone https://github.com/jemishkevadiya/portfolio-website.git
  cd portfolio-website

- Install Dependencies:
  npm install

- Run the Project:
  npm start

Usage
- Navigate through sections using the navbar or scroll button.
- Click the "Send" button in the About section to view my bio.
- Flip project cards in the Personal Projects section to see details.
- Download my resume or cover letter from the hero section’s right-bottom icons.
- Submit the contact form to reach me (ensure EmailJS is configured).

Project Structure
  portfolio-website/
  ├── public/
  │   ├── Jemish_Resume.pdf           # Resume PDF
  │   ├── cover_letter(portfolio).pdf # Cover Letter PDF
  │   └── videos/
  │       └── homepageVideo.mp4       # Background video
  ├── src/
  │   ├── components/
  │   │   ├── Navbar.js               # Navigation bar
  │   │   ├── Navbar.css              # Navigation bar
  │   │   ├── ComputersCanvas.js      # 3D computer model
  │   │   ├── ComputersCanvas.css     # 3D computer model
  │   │   ├── ShinyText.js            # Animated text
  │   │   ├── ShinyText.css           # Animated text
  │   │   ├── GlassIcons.js           # Skills icons
  │   │   ├── GlassIcons.js           # Skills icons
  │   │   └── RollingGallery.js       # Certificates carousel
  │   │   ├── RollingGallery.js       # Certificates carousel
  │   ├── assets/                     # Icons and certificate images
  │   ├── Home.js                     # Main component
  │   └── Home.css                    # Styles
  ├── .env                            # Environment variables
  ├── package.json                    # Dependencies and scripts
  └── README.md                       # This file

Contact
- Email: jemish2327@gmail.com
- Phone: +1 (226)-202-2327
- LinkedIn: linkedin.com/in/jemish2327

Feel free to reach out for collaboration or inquiries!
