import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../../components/home-link/home-link';
import pivunovaBrand from '../../images/pivunova_brand.png';
import './home.css';

const Home = () => {
  return <div>
    <img className="pivunova-brand" src={pivunovaBrand} width="150px" alt="pivunova brand" />
    <div className="designer-title title">UX/UI Designer</div>
    <HomeLink />
    <Link className="page-link projects-link" to='/projects'>Projects</Link>
    <Link className="page-link about-link" to='/about'>About</Link>
    <Link className="page-link contact-link" to='/contact'>Contact</Link>
  </div>;
};

export default Home;
