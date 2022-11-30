import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../../components/home-link/home-link';

import pivunovaBrand from '../../images/pivunova-brand.png';
import './home.scss';

const Home = () => {
  return <div>
    <div className="pivunova-brand">
      <img className="pivunova-brand-content" src={pivunovaBrand} width="150px" alt="pivunova brand" />
    </div>
    <div className="designer-title-wrapper title">
      <span className="designer-title">UX/UI Designer</span>
    </div>
    <HomeLink />
    <Link className="page-link projects-link" to='/projects'>Projects</Link>
    <Link className="page-link about-link" to='/about'>About</Link>
    <Link className="page-link contact-link" to='/contact'>Contact</Link>
  </div>;
};

export default Home;
