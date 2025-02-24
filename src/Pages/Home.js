import React, { useEffect, useState } from 'react';
import myImage from './profile_dp.png';
import './Home.css';

const Profile = () => {
  const [displayedLetters, setDisplayedLetters] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const word = "Hello!";
    let index = 0;

    const interval = setInterval(() => {
      if (index < word.length) {
        setDisplayedLetters(word.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "HTML"},
    { name: "CSS"},
    { name: "BootStrap" },
    { name: "JavaScript"},
    { name: "React"},
    { name: "Node.js"},
    { name: "Express.js"},
    { name: "MongoDB"},
  ];

  return (
    <>
      <div className="container" style={{marginTop:"30px"}}>
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1-style">
              <span className='one-style'>{displayedLetters}</span><br />
              <span className='two-style'>I'm Krishna</span><br />
              <span className='three-style'>I'm a MERN Stack Developer</span>
            </h1>
            <p className="description">
              I specialize in building responsive and accessible web applications using the MERN stack.
              My passion lies in creating seamless user experiences and efficient backend solutions.
            </p>
          </div>  
          <div className="col-md-6">
            <img src={myImage} alt="My Image" className="my-image animated-image" />
          </div>
        </div>
        <div className="social-links">
              <a
                href="https://github.com/krishna2004-31?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-seth-125124264/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/justttt_.krishna/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="mailto:your.krishnasethyoyo321@gmail.com"
                className="social-link"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
      </div>
      <div className="container about-me-container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="h1-style about-me-title">
              About Me
            </h1>
            <p className="about-me-description">
              I'm a passionate <span className="mern-highlight">MERN</span> stack developer with a focus on building efficient and user-friendly web applications. I thrive on turning ideas into reality through clean code and innovative solutions. I'm always eager to learn and explore the latest technologies in the ever-evolving world of web development.
            </p>
            <div className="skills-container">
              <h2 className="skills-title">My Skills</h2>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`skill-item ${hoveredSkill === skill.name ? 'skill-item-hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-icon">
                      <img
                        src={`/icons/${skill.name.toLowerCase()}.svg`}
                        alt={skill.name}
                        className="icon"
                      />
                    </div>
                    <div className="skill-info">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-progress">
                        <div
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}` }}
                        ></div>
                      </div>
                      <div className="skill-level">{skill.level}</div>
                    </div>
                    {hoveredSkill === skill.name && (
                      <div className="skill-details">
                        <p>{skill.details}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Profile;