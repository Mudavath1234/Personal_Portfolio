import React from 'react';
import { User, MapPin, Mail, Phone, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 style={{ color: 'rgb(29, 2, 179)' }}>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="left-column">
            <h1 className="objective1">
               Seeking a challenging position in the IT industry to apply my software development and problem-solving skills.
                Eager to contribute to innovative projects and grow continuously within a dynamic and collaborative team
                environment.
            </h1>

            <p className="objective">
              I have a strong foundation in programming languages like C, C++, Python, and OOPs Through JAVA, as well as experience in web development using HTML, CSS, JavaScript, and PHP. 
              I’m also skilled in database management like SQL, Postgre SQL & MongoDB followed by UI/UX design, and working with tools like Figma and Git.
            </p>

            {/* Personal Info */}
            <div className="info-row">
              <div className="info-box">
                <User size={20} className="icon user" />
                <div>
                  <label>Full Name</label>
                  <p>Uday Kumar Naik Mudavath</p>
                </div>
              </div>
              <div className="info-box">
                <MapPin size={20} className="icon map" />
                <div>
                  <label>Location</label>
                  <p>Devarakonda, Nalgonda,Telangana</p>
                </div>
              </div>
              <div className="info-box">
                <Mail size={20} className="icon mail" />
                <div>
                  <label>Email</label>
                  <p>mudavathudaykumarnaik@gmail.com</p>
                </div>
              </div>
              <div className="info-box">
                <Phone size={20} className="icon phone" />
                <div>
                  <label>Phone</label>
                  <p>+91 8340820754</p>
                </div>
              </div>
            </div>

            {/* Role & Expertise */}
            <div className="roles-timeline">
              <h3><Briefcase className="icon briefcase" /> My Roles & Expertise</h3>

              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="dot"></div>
                  <div className="timeline-content">
                    <h4>Full Stack Developer</h4>
                    <p>Developed full-scale web apps using React and Node.js.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot"></div>
                  <div className="timeline-content">
                    <h4>UI/UX Designer</h4>
                    <p>Created intuitive designs and enhanced user experience.</p>
                  </div>
                </div>

                {/* <div className="timeline-item">
                  <div className="dot"></div>
                  <div className="timeline-content">
                    <h4>React Native Developer</h4>
                    <p>Built cross-platform mobile apps for Android & iOS.</p>
                  </div>
                </div> */}

                {/* <div className="timeline-item">
                  <div className="dot"></div>
                  <div className="timeline-content">
                    <h4>Backend API Developer</h4>
                    <p>Developed secure and scalable RESTful APIs.</p>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
