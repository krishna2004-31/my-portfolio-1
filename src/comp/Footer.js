import React from "react";
import './footer.module.css'

const footer=()=>{
    return(
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Krishna. All rights reserved.
            </p>
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
        </div>
      </footer>
    )
}
export default footer;