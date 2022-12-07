import React from 'react';

import HomeLink from '../../components/home-link/home-link';
import CustomLink from '../../components/custom-link/custom-link';

import pivunovaBrand from '../../images/pivunova-brand.png';
import './home.scss';

function Home() {
  return (
    <div>
      <div className="pivunova-brand">
        <img src={pivunovaBrand} alt="" className="pivunova-brand-content" />
      </div>
      <div className="designer-title-wrapper title">
        <span className="designer-title">Lead Designer</span>
      </div>
      <HomeLink />
      <CustomLink className="page-link projects-link" to="/projects">Projects</CustomLink>
      <CustomLink className="page-link contact-link" to="/contact">Contact</CustomLink>
      <CustomLink className="page-link about-link" to="/about">About</CustomLink>
    </div>
  );
}

export default Home;
