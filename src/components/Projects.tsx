// Projects.tsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "• Placement Particulars Portal",
      description: "Built a portal to centralize job roles, company info, and student feedback for campus placements.",
      image: "https://ik.imagekit.io/ejj8k8670/rguktbasar_cover.jpeg?updatedAt=1752490633989",
      technologies: ["HTML/CSS","Java Script","React","PHP","MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mudavath1234/ProPlacementPortal",
      featured: false
    },
    {
      id: 2,
      title: "• e-Examination Portal ",
      description: "Created a secure exam platform with role-based access and auto result processing.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies:["HTML/CSS","Java Script","React","PHP","MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
     {
      id: 3,
      title: "• Ask Medicine",
      description: "Built an AI chatbot UI to suggest medicines based on user health queries.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTYOWoJWIkTjzfMhL5KzD4r2dtp3nwEMpUQ&s",
      technologies: ["Java Script","React JS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mudavath1234/AskMedicine",
      featured: false
    },
     {
      id: 4,
      title: "• Traffic Monitoring System ",
      description: "Developed real-time system for vehicle detection, tracking, and speed violation alerts.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlqVycfQdPA25EksY2_GXNnhK8ZKVBdSI8w&s",
      technologies: ["Python", "OpenCV", "YOLOv8"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mudavath1234/Traffic_Monitoring_System-",
      featured: false
    }
    
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                {/* <div className="image-overlay">
                  <a href={project.liveUrl} className="icon-btn">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="icon-btn">
                    <Github size={20} />
                  </a>
                </div> */}
              </div>

              <div className="project-details">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="badge">Featured</span>}
                </div>

                <p className="description">{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>

                {/* <div className="project-links">
                  <a href={project.liveUrl} className="link-btn">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} className="link-btn">
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
