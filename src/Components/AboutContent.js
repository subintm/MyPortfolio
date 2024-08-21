// AboutContent.js
import React from 'react';
import { Link } from "react-router-dom";
import "./AboutContent.css";

const AboutContent = () => {
  const skills = [
    { name: 'React', level: 85 },
    { name: 'FrontEnd Development', level: 85 },
    { name: 'Fullstack Development (MERN)', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'HTML', level: 98 },
    { name: 'Tailwind CSS', level: 98 },
    { name: 'CSS', level: 98 },
  ];

  const education = [
    { year: '2020-2023', degree: 'Bachelor of Computer AppliCation', institution: 'University of Calicut' },
    { year: '2018-2020', degree: 'PlusTwo(Computer Science)', institution: 'HSS Chalavara' },
  ];

  return (
    <div className="about">
      <div className="about-content">
        <h1>Who Am I?</h1>
        <p>I'm a passionate Full Stack Developer with expertise in creating efficient and user-friendly web applications. My goal is to deliver high-quality solutions that exceed client expectations.</p>
        
        <section className="personal-details">
          <h2>Personal Details</h2>
          <ul>
            <li><strong>Name:</strong> Subin </li>
            <li><strong>Age:</strong> 22</li>
            <li><strong>Location:</strong>Ottapalam,Palakkad</li>
            <li><strong>Email:</strong>subintmtm70@gmail.com</li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="education-tree">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <span className="year">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills">
          <h2>My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link to="/contact" className="contact-btn">Contact Subin</Link>
      </div>
    </div>
  );
};

export default AboutContent;