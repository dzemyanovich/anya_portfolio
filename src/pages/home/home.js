import React from 'react';
import { Link } from 'react-router-dom';

import pivunovaBrand from '../../images/pivunova_brand.png';
import pivunova from '../../images/pivunova.svg';
import './home.css';

const Home = () => {
  return <div>
    <img className="pivunova-brand" src={pivunovaBrand} width="150px" alt="pivunova brand" />
    <div className="designer-title">UX/UI Designer</div>
    <img className="pivunova-link" src={pivunova} alt="pivunova" width="24px" />
    <Link className="projects-link" to='/projects'>Projects</Link>
    <Link className="about-link" to='/about'>About</Link>
    <Link className="contact-link" to='/contact'>Contact</Link>
  </div>;
};

export default Home;
