import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">All rights reserved &copy; PRIYANSH GARG</p>
        <div className="social-links mb-3">
          <a href="https://github.com/PriyanshGarg15" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/priyansh-garg-70697327a/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <small className="d-block text-muted">Built by Priyansh Garg</small>
      </div>
    </footer>
  );
};

export default Footer;
