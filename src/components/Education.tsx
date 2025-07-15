import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Techology in Computer Science",
      institution: "RGUKT-Basar, Nirmal, Telangana -504107.",
      period: "2021 - 2025",
      gpa : "8.28/10.0",
      url: "https://www.rgukt.ac.in",
      description: "Specialized in Computer Science Engineering and Software Development",
      achievements: [
        "Participated in the CodeChef weekely coding contest",
        "Solved some STRIVER DSA SHEET Problems on LeetCode and GFG",
        "Served as the class representative, demonstrating leadership and organizational skills.",
        "Organized Events such as Teachers day ,Freshers day, and Farewell at University Department Level.",
      ]
    },
    {
      id: 2,
      degree: "Pre_University Course - MPC",
      institution: "RGUKT-Basar, Nirmal, Telangana -504107.",
      period: "2019 - 2021",
      gpa: "8.38/10.0",
      url: "https://www.rgukt.ac.in",
      description: "Focused on MPC, emphasizing analytical reasoning, problem-solving, and a strong foundation in core science subjects.",
      achievements: [
        "Participated in ANTHAPRAGNA TECHNICAL FEST events and received the Runner-up Certificate in the Treasure Hunt competition.",
        "Actively contributed as a member of the HOPE HOUSE Club, focused on student welfare and social upliftment.",
      ]
    },
    {
      id: 3,
      degree: "Secondary School Education - Xth Class",
      institution: "TSMS-Devarakonda, Nalgonda , Telangana -508248.",
      period: "2018-2019",
      gpa: "9.80/10.0",
      url: "https://stackschools.com/schools/36292900801/tsms-devarkonda",
      description: "Completed SSC with a strong academic foundation, focusing on core subjects like Mathematics, Science, and English.",
      achievements: [
        "Best Student Award for outstanding academic performance and leadership qualities.",
        "Participated in various inter-school competitions, showcasing skills in mathematics and science.",
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "NPTEL Course Completion in Data Base Management System",
      issuer: "Indian Institute of Technology, Kharagpur",
      date: "2024"
    },
    {
      id: 2,
      name: "Internship Completion Certificate on Web Development",
      issuer: "Xpress Visa -Gateway for your future",
      date: "2024"
    },
    {
      id: 3,
      name: "Internship Completion Certificate on UI/UX Design",
      issuer: "Internship Studio",
      date: "2024"
    },
    {
      id: 3,
      name: "Training assistant to PO,APO & OPO of General Elections TSLA",
      issuer: "Returning Officer, Mudhole, Nirmal",
      date: "2022"
    },
    {
      id: 3,
      name: "Diploma in MS-Office",
      issuer: "GEENI Computer Education - An ISO Certified Institution",
      date: "2021"
    },
    
    {
      id: 3,
      name: "Data Entry",
      issuer: "JAK Computer Education",
      date: "2019"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 style={{ color: 'rgb(29, 2, 179)' }} className="section-title">Education</h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid-container">
          {/* Education Block */}
          <div>
            <h3 className="subheading">
              <GraduationCap className="icon" size={28} />
              Academic Background
            </h3>

            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="card">
                  <div className="card-header">
                    <h4 className="degree">{edu.degree}</h4>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p className="institution">
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="institution-link"
                    >
                    {edu.institution}
                  </a>
                </p>
                  <div className="gpa">
                    <span className="label">GPA:</span>
                    <span className="value">{edu.gpa}</span>
                  </div>
                  <p className="description">{edu.description}</p>
                  <div className="achievements">
                    <h5>Key Achievements & Roles:</h5>
                    <ul>
                      {edu.achievements.map((item, i) => (
                        <li key={i}>
                          <span className="dot"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="subheading">
              <Award className="icon" size={28} />
              Certifications
            </h3>

            <div className="certifications-list">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-header">
                    <h4>{cert.name}</h4>
                    <span>{cert.date}</span>
                  </div>
                  <p className="issuer">Issued by {cert.issuer}</p>
                </div>
              ))}
            </div>

            {/* Academic Focus Areas */}
            <div className="focus-areas">
              <h4>Academic Focus Areas</h4>
              <div className="focus-grid">
                <div>
                  <h5>Core Subjects</h5>
                  <ul>
                     <li>Large Language Models</li>
                      
                      
                      <li>Neural Networks</li>
                      
                      <li>Data Structures & Algorithms</li>
                      <li>RDBMS</li>
                      <li>Networking</li>
                      <li>Operating System</li>
                      <li>Compiler Design</li>
                      {/* <li>Programming in C</li> */}
                      <li>OOPs through JAVA</li>
                  </ul>
                </div>
                <div>
                  <h5>Other Courses</h5>
                  <ul>
                    <li>Web Development</li>
                    <li>Machine Learning</li>
                    <li>Data Analytics</li>
                    <li>Artificial Intelligence</li>
                    <li>Cryptography & Network Security</li>
                    <li>UI/UX Design</li>
                    <li>Mobile Development</li>
                  </ul>
                </div>
                {/* <div>
                  <h5>Version Control</h5>
                  <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                  </ul>
                </div>
                <div>
                  <h5>Designing</h5>
                  <ul>
                    <li>Figma</li>
                    <li>Canva</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
