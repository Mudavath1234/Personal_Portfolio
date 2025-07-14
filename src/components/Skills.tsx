// Skills.tsx
import React from 'react';
import './Skills.css';
import { Code, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: <Terminal className="skill-icon terminal" />,
    title: 'Programming Languages',
    skills: [
      { name: 'OOPs Through JAVA', level: 95 },
      { name: 'Python', level: 65 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 85 },
    ],
  },
  {
    icon: <Code className="skill-icon frontend" />,
    title: 'Frontend Development',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React JS', level: 80 },
      { name: 'Angular Js', level: 40 },
      { name: 'Vue.js', level: 20 },
    ],
  },
  {
    icon: <Database className="skill-icon backend" />,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 55 },
      { name: 'Express.js', level: 50 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
  icon: <Code className="skill-icon tools" />, // optional: replace with another icon if preferred
  title: 'Tools & Platforms',
  skills: [
    { name: 'GitHub', level: 90 },
    { name: 'Figma', level: 85 },
    { name: 'Canva', level: 95 },
    { name: 'VS Code', level: 95 },
    { name: 'Notion', level: 70 },
  ],
}

];

const Skills = () => {
  return (
    <section className="skills-section-alt" id="skills">
      <div className="skills-header-alt">
        <h2>My Skillset</h2>
        <p>Languages & Technologies I work with.</p>
      </div>

      <div className="skills-scroll">
        {skillCategories.map((category, index) => (
          <div className="skill-card-alt" key={index}>
            <div className="skill-card-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skill-list-alt">
              {category.skills.map((skill, idx) => (
                <div className="skill-item-alt" key={idx}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-alt">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
