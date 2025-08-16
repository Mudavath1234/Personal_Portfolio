// Footer.tsx
import React from 'react';
import './Footer.css';
import { Github, Linkedin, Twitter, Mail, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Mudavath1234',
      className: 'github',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/mudavath-uday-kumar-naik/',
      className: 'linkedin',
    },
   
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:mudavathudaykumarnaik@gmail.com',
      className: 'email',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/mr.mister1234',
      className: 'instagram',
    },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-header">
          <h2>Let's Connect</h2>
          <p>
            Connect with me on your preferred platform—I'm open to new opportunities and collaborations."
          </p>
        </div>

        <div className="social-icons">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${link.className}`}
              aria-label={link.name}
            >
              {link.icon}
              <span className="tooltip">{link.name}</span>
            </a>
          ))}
        </div>

        {/* <div className="footer-email">
          <p>
            Or drop me a line at{' '}
            <a href="mailto:john@example.com">john@example.com</a>
          </p>
        </div> */}

        <div className="footer-bottom-flex">
  <span className="made-by">
    Made by Uday Naik
  </span>
  <span className="divider">|</span>
  <span className="copyright">
    © {new Date().getFullYear()} All rights reserved.
  </span>
</div>

      </div>
    </footer>
  );
};

export default Footer;
