import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa'; 
import '../Intro.css'; 
import Resume from "../assets/MR.Vigneshkumar-resume.pdf";
import profile from "../assets/vigneshkumar.jpg";
import gopuram from "../arts/gopuram.jpg";
import couple from "../arts/couple.jpg";
import elephant from "../arts/elephant.jpg";
import mom from "../arts/mom.jpg";
import tree from "../arts/arttree.jpg";

const Intro = () => {
  const [openSkill, setOpenSkill] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showArtGallery, setShowArtGallery] = useState(false);
  const [activeTab, setActiveTab] = useState('UG'); 

  const skills = [
    { name: 'Node.js', description: 'Extensive experience building scalable server-side applications.' },
    { name: 'React.js', description: 'Specialized in creating dynamic functions using React.js.' },
    { name: 'MongoDB', description: 'Expert in managing NoSQL databases for data-driven applications.' },
    { name: 'Express.js', description: 'Proficient in developing REST APIs using Express.js.' },
    { name: 'Core Java', description: 'Solid understanding of core Java programming concepts.' },
    { name: 'MySQL', description: 'Experienced in working with relational databases like MySQL.' }
  ];

  const toggleSkill = (index) => {
    setOpenSkill(openSkill === index ? null : index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleArtGallery = () => {
    setShowArtGallery(!showArtGallery);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={darkMode ? "intro-container dark" : "intro-container light"}>
    <button className="theme-toggle" onClick={toggleDarkMode}>
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-pic">
          <img src={profile} alt="Profile" />
        </div>
        <div className="introduction">
          <h1>Hi, I'm Vignesh Kumar MR</h1>
          <p>
            I am a full-stack developer with expertise in Node.js, React.js, MongoDB, and Express.js. 
            Besides programming, I am passionate about portrait art. Explore my resume and connect with me through social media or mobile.
          </p>
          <a href={Resume} target="_blank" rel="noreferrer">
            <button className="resume-button">View My Resume</button>
          </a>
        </div>
      </div>

      {/* Qualification Section */}
      <div className="qualification-container">
        <h1>Qualifications</h1>

        <div className="qualification-tabs">
          <button onClick={() => handleTabClick('UG')} className={activeTab === 'UG' ? 'active' : ''}>UG</button>
          <button onClick={() => handleTabClick('12th')} className={activeTab === '12th' ? 'active' : ''}>12th Standard</button>
          <button onClick={() => handleTabClick('10th')} className={activeTab === '10th' ? 'active' : ''}>10th Standard</button>
        </div>

        <div className="qualification-content">
          {activeTab === 'UG' && (
            <div className="qualification-box">
              <h2>College (UG)</h2>
              <h3>Bachelor of Computer Science</h3>
              <p><strong>College:</strong> Sourashtra College.</p>
              <p><strong>Place:</strong> Madurai.</p>
              <p><strong>CGPA:</strong> 8.4</p>
              <p><strong>Graduation Completed:</strong> July 2022.</p>
            </div>
          )}

          {activeTab === '12th' && (
            <div className="qualification-box">
              <h2>12th Standard</h2>
              <p><strong>School Name:</strong> A.V. Higher Secondary School.</p>
              <p><strong>Place:</strong> South Chithirai Street, Madurai.</p>
              <p><strong>Percentage:</strong> 66%</p>
              <p><strong>12th Completed:</strong> March 2019.</p>
            </div>
          )}

          {activeTab === '10th' && (
            <div className="qualification-box">
              <h2>10th Standard</h2>
              <p><strong>School Name:</strong> A.V. Higher Secondary School.</p>
              <p><strong>Place:</strong> South Chithirai Street, Madurai.</p>
              <p><strong>Percentage:</strong> 84%</p>
              <p><strong>10th Completed:</strong> March 2017.</p>
            </div>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h1>My Skills</h1>
        <ul>
          {skills.map((skill, index) => (
            <li key={skill.name}>
              <button onClick={() => toggleSkill(index)} className="skill-button">
                {skill.name}
                <span className={`dropdown-icon ${openSkill === index ? 'open' : ''}`}>▼</span>
              </button>
              {openSkill === index && (
                <ul className="skill-details">
                  <li>{skill.description}</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="courses-section">
        <h1>Course</h1>
        <p>
        I have studied Core Java and Node.js, gaining expertise in object-oriented programming concepts, backend development, and server-side scripting.

        </p>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <h1>Projects</h1>
        <p>
          I have worked on various full-stack projects using technologies like Node.js, React.js, MongoDB, and Express.js. These include web applications, REST APIs, and more.
        </p>
      </div>

      

      {/* Experience Section */}
      <div className="experience-section">
        <h1>Experience</h1>
        <p>
          With over 1 year of professional experience, I have been involved in building and maintaining full-stack applications, improving performance, and ensuring scalability.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className="hobbies-section">
        <h1>My Hobbies</h1>
        <p>
          Besides coding, I am a portrait artist who enjoys creating detailed artwork in my free time.
        </p>
        <button className="toggle-art-button" onClick={toggleArtGallery}>
          {showArtGallery ? 'Hide My Art' : 'Show My Art'}
        </button>

        {showArtGallery && (
          <div className="art-gallery">
            {[gopuram, mom, tree, elephant, couple].map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Art ${index + 1}`} className="art-image" />
            ))}
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h1>Contact Me</h1>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/vignesh-kumar-mr-73987b259/" target="_blank" rel="noreferrer">
            <FaLinkedin size={40} color="#0077b5" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">
            <FaEnvelope size={40} color="#25D366" />
          </a>
          <a href="https://wa.me/9087791335" target="_blank" rel="noreferrer">
            <FaWhatsapp size={40} color="#25D366" />
          </a>
        </div>
        <div className="contact-info">
          <p><strong>WhatsApp:</strong> +91 90877 91335</p>
          <p><strong>Mobile:</strong> +91 90877 91335</p>
          <p><strong>Email:</strong> vignesh29ramesh@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
