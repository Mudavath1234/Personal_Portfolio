import React from 'react';
import { Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Xpress Visa Education Consultant Pvt Ltd.",
      period: "Mar 2024 - Apr 2024",
      type: "Remote",
      description: [
        "Global Study Guide – Explore countries, courses, and application steps.",
        "Scholarship Access – Find funding options tailored to your goals.",
        "Career Pathway – Empowering students for global academic success."
      ],
      technologies: ["HTML","CSS","Java Script","React JS","MySQL"]
    },
     {
      id: 2,
      title: "UI/UX Developer",
      company: "Intersnhip Studio.",
      period: "May 2024 - Jun 2024",
      type: "Remote",
      description: [
        "Completed a UI/UX design internship focused on an e-commerce grocery landing page.",
        "Designed user-friendly and visually engaging interfaces using Figma.",
        "Applied user-centered design principles to enhance usability and customer experience."
      ],
      technologies: ["Figma","Figjam","Canva"]
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Zaltix Soft Solutions Pvt Ltd.",
      period: "Jun 2025 - Jul 2025",
      type: "Internship",
      description: [
        "Designed and developed a responsive website for a startup.",
        "Highlighted core services, areas of expertise, and client testimonials.",
        "Integrated a contact section for customer support and inquiries."
      ],
      technologies: ["HTML","CSS","Java Script","React JS","MySQL","PHP"]
    },
    {
      id: 4,
      title: "Developer",
      company: "Zaltix Soft Solutions Pvt Ltd.",
      period: "Jul 2025 - Aug 2025",
      type: "Internship",
      description: [
        "Built a school management MVP with modules for Attendance, Marks, Fees, and Notices.",
        "Developed the frontend using React.js and connected it to a Node.js + Express.js backend.",
        "Integrated MySQL for efficient data storage and retrieval across core features."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React Js",'React -native',"Node Js","Express Js" ,"MySQL","Mongo DB"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="title">Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="timeline-dot"></div>

                <div className="experience-card">
                  <div className="experience-top">
                    <div>
                      <h3 className="job-title">{exp.title}</h3>
                      <p className="company-name">{exp.company}</p>
                    </div>
                    <div className="experience-tags">
                      <span className={`badge ${
                        exp.type === 'Internship' ? 'internship' : 'fulltime'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="calendar">
                        <Calendar size={16} className="calendar-icon" />
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="description-list">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="description-item">
                        <span className="bullet"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
