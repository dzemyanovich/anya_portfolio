import React from 'react';

import HomeLink from '../../components/home-link/home-link';

import aboutImage from '../../images/about-image.jpg';
import './about.scss';

export default function About() {
  return (
    <div className="about-container">
      <HomeLink />
      <div className="about-page">
        <div className="about-image-container">
          <div className="about-name title">Anna Pivunova</div>
          <div className="about-title title">Lead Designer</div>
          <img src={aboutImage} alt="" className="about-image" />
        </div>
        <div className="about-content">
          <div className="paragraph">
            <div className="paragraph-title">About me</div>
            <div className="paragraph-content">
              Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria,
              that designs and manufactures shoes, clothing and accessories. It is the largest sportswear
              manufacturer in EuropeAdidas is a German multinational corporation, founded and headquartered in
              Herzogenaurach, Bavaria, that designs as
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Clients</div>
            <div className="paragraph-content">
              Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria,
              that designs and manufactures shoes, clothing and accessories. It is the largest sportswear
              manufacturer in EuropeAdidas is a German multinational corporation, founded and
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
