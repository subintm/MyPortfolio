import './WorkCard.css';
import React from 'react';
import reservationImg from '../assets/resturant.jpg';
import ShopImage from '../assets/shop.jpg';
import media from '../assets/meadia.gif';
import Calculator from '../assets/clalculator.jpg';
import InterestCalculator from "../assets/InterestCalculator.jpeg"
import quiz from '../assets/Quiz.png';

const projects = [
  {
    image: reservationImg,
    title: 'Restaurant Reservation',
    description: 'Easily book and manage restaurant reservations.',
    link: 'https://res-reservation-frontend.vercel.app',
  },
  {
    image: ShopImage,
    title: 'E-Commerce Shop',
    description: 'Online store with cart and secure checkout.',
    link: 'https://my-ecart-bice.vercel.app',
  },
  {
    image: media,
    title: 'Social Media Dashboard',
    description: 'Manage and track multiple social media accounts.',
    link: 'https://meadia-player.vercel.app',
  },
  {
    image: Calculator,
    title: 'Calculator App',
    description: 'Simple calculator for basic functions.',
    link: 'https://calculator-five-gray.vercel.app',
  },
  {
    image: quiz,
    title: 'Quiz App',
    description: 'Test your knowledge with various quizzes.',
    link: 'https://my-quiz-app-amber.vercel.app',
  },
  {
    image: InterestCalculator,
    title: 'Interest Calculator',
    description: 'Calculate simple and compound interest easily.',
    link: 'https://simple-interest-calculator-three.vercel.app',
  }
];


const WorkCard = () => {
  const duplicatedProjects = [...projects, ...projects]; // Duplicate the projects

  return (
    <div className='work-container'>
      <div className='project-container'>
        {duplicatedProjects.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='project-image-container'>
              <img src={project.image} alt={project.title} className='project-image' />
            </div>
            <div className='project-content'>
              <h2 className='project-title'>{project.title}</h2>
              <p className='project-description'>{project.description}</p>
              <a href={project.link} className='project-link'>
                <button className='view-button'>View</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;