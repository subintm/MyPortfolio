import React from 'react';
import mainImg2 from '../assets/img2.jpeg';
import mainImg1 from '../assets/imgSubin.jpeg';
import { Link } from 'react-router-dom';
import './HeroImg.css';
import myCv from '../assets/SubinTMResume.pdf';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={mainImg1} alt={mainImg2} />
      </div>
      <div className='content'>
        <p>HI, I'M SUBIN T M</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          {/* <Link to='/contact' className='btn-light'>Download Cv</Link> */}
          <a
            href={myCv} 
            download="SubinTMResume.pdf" 
            className='btn-light'
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
