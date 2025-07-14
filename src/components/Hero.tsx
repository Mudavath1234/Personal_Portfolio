import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-animation">
          <h1 className="hero-title">
            <span className="block">Hello, I'm</span>
            <span className="hero-name">
              Uday Kumar Naik Mudavath
            </span>
          </h1>

          <p className="hero-subtitle">
            Full Stack Developer & UI/UX Designer.
          </p>

          <p className="hero-description">
            Engineering digital solutions that are not only visually compelling but also strategically optimized for user engagement.
          </p>

          <div className="hero-buttons">
            <button onClick={scrollToAbout} className="learn-more">
              Learn More
            </button>
            <a
            href="../../assets/Resume (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv"
            >
            View Resume
            </a>

          </div>
        </div>
      </div>

      <button onClick={scrollToAbout} className="scroll-down">
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
