import React from 'react';

import HomeLink from '../../components/home-link/home-link';
import CustomLink from '../../components/custom-link/custom-link';

import pivunovaBrand from '../../images/pivunova-brand.png';
import './home.scss';

export default function Home() {
  return (
    <div>
      <div className="pivunova-brand">
        <img src={pivunovaBrand} alt="" className="pivunova-brand-content" />
      </div>
      <div className="designer-title-wrapper title">
        <span className="designer-title">Lead Designer</span>
      </div>
      {/* todo: home link blinks on mobile (e.g. iPhone 11) */}
      <HomeLink />
      <CustomLink className="page-link products-link" to="/products">Products</CustomLink>
      <CustomLink className="page-link contact-link" to="/contact">Contact</CustomLink>
      <CustomLink className="page-link about-link" to="/about">About</CustomLink>
    </div>
  );
}
