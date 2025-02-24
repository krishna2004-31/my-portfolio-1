import React from 'react';
import './Project.css';
import Web from './html_css_WP.png';
import Web1 from './html_css_WP1.png';
import Web2 from './html_css_WP2.png';
import ani from './aniWood.png'
import ani1 from './aniWood1.png'
import ani2 from './aniWood2.png'
import ani3 from './aniWood3.png'
import ani4 from './aniWood.4png.png'
import ani5 from './aniWood5.png'
import boot from './Bootstrap.png'
// import boot1 from './Bootstrap1.png'
import boot2 from './Bootstrap2.png'
import boot3 from './Bootstrap3.png'
import boot4 from './Bootstrap4.png'
import boot5 from './Bootstrap5.png'
import boot6 from './Bootstrap6.png'
import quiz from './quiz.png'
import quiz1 from './quiz1.png'
import quiz2 from './quiz2.png'
import quiz3 from './quiz3.png'
import col from './col.png'
import col1 from './col1.png'
import col2 from './col.2png.png'
import shop from './shop.png'
import shop1 from './shop1.png'
import shop2 from './shop2.png'


const Project = () => {
  const projects = [
    {
      title: 'HTML/CSS WikiPedia Page',
      description: 'A simple  Wikipedia Page created using HTML and CSS. This project was created to practice HTML and CSS skills. Slide too see more ScreenShots',
      imageUrls: [Web, Web1, Web2],
      localInstructions: `1. Clone the repository from GitHub: https://github.com/krishna2004-31/projects-html
2. Navigate to the project directory: cd projects-html/Wikipediaanime
3. Open wikipedia.html in your browser.`,
      githubUrl: 'https://github.com/krishna2004-31/projects-html',
    },
    {
        title: 'HTML/CSS AniWood WebPage',
         description: 'A simple  Anime Streming WebPage created using HTML and CSS with animation. This project was created to practice HTML and CSS skills. Slide too see more ScreenShots',
        imageUrls: [ani, ani1, ani2, ani5, ani4, ani3],
        localInstructions: `1. Clone the repository from GitHub: https://github.com/krishna2004-31/project-html-css
2. Navigate to the project directory: cd projects-html-css/ani_wood
3. Open wikipedia.html in your browser.`,
        githubUrl: 'https://github.com/krishna2004-31/project-html-css',
      },
      {
        title: 'HTML/CSS/BootStrap Code_Area WebPage',
         description: 'A simple Tutorial WebPAge created using HTML,CSS and Bootsrap with animation. This project was created to practice HTML,CSS and BootStrap skills. Slide too see more ScreenShots',
        imageUrls: [boot, boot2, boot3, boot4, boot5, boot6],
        localInstructions: `1. Clone the repository from GitHub: https://github.com/krishna2004-31/projrct-bootstrap.git
2. Navigate to the project directory: cd projrct-bootstrap/Code_area
3. Open wikipedia.html in your browser.`,
        githubUrl: 'https://github.com/krishna2004-31/projrct-bootstrap',
      },
      {
        title: 'HTML/CSS/JavaScript HULK SMASH QUIZ! WebPage',
         description: 'A simple  Quiz game WebPage created using HTML,CSS and JavaScript . This project was created to practice HTML,CSS and JavaScript skills. Slide too see more ScreenShots',
        imageUrls: [quiz,quiz1,quiz2,quiz3],
        localInstructions: `1. Clone the repository from GitHub: https://github.com/krishna2004-31/Quizgamejs.git
2. Navigate to the project directory: cd Quizgamejs
3. Open wikipedia.html in your browser.`,
        githubUrl: 'https://github.com/krishna2004-31/Quizgamejs.git',
      },
      {
        title: 'HTML/CSS/JavaScript Calculator Page',
         description: 'A simple  Calculator Page created using HTML,CSS and JavaScript . This project was created to practice HTML,CSS and JavaScript skills. Slide too see more ScreenShots',
        imageUrls: [col,col1,col2],
        localInstructions: `1. Clone the repository from GitHub: https://github.com/krishna2004-31/calculater.git
2. Navigate to the project directory: cd calculater
3. Open wikipedia.html in your browser.`,
        githubUrl: 'https://github.com/krishna2004-31/calculater.git',
      },
      {
      title: 'HTML/CSS/JavaScript/ReactJs AddToCart Page',
         description: 'A simple  AddToCart Page created using HTML,CSS,JavaScript and ReactJs . This project was created to practice HTML,CSS ,JavaScript And ReactJs skills. Slide too see more ScreenShots',
        imageUrls: [shop,shop1,shop2],
        localInstructions: `1. Clone the repository from GitHub: https://github.com/krishna2004-31/shopping-react.git
2. Navigate to the project directory: cd shopping-react
3. Open wikipedia.html in your browser.`,
        githubUrl: 'https://github.com/krishna2004-31/shopping-react.git',
      },
  ];

  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-images">
              {project.imageUrls.map((imageUrl, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imageUrl}
                  alt={`${project.title} - Image ${imgIndex + 1}`}
                  className="project-image"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="project-details">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
              <div className="local-instructions">
                <h3>Run Locally:</h3>
                <pre>{project.localInstructions}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;