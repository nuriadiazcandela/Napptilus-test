import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../stylesheet/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_author">
        <p>&copy; 2022 Nuria Díaz</p>
      </div>
      <div className="footer_contact">
        <a
          target="_blank"
          rel="noreferrer"
          className="icon_github"
          href="https://github.com/nuriadiazcandela"
          title="Access GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="icon_linkedin"
          href="https://www.linkedin.com/in/nuriadiazcandela/"
          title="Access Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};
