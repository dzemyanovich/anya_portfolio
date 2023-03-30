import * as React from 'react';
import { useEffect } from 'react';

import HomeLink from '../../components/home-link/home-link';
import CustomLink from '../../components/custom-link/custom-link';
import { resetScroll } from '../../utils/utils';

import aboutImage from '../../images/about-image.jpg';
import adidas from '../../images/brands/adidas.svg';
import epam from '../../images/brands/epam.svg';
import mcdonalds from '../../images/brands/mcdonalds.svg';
import subway from '../../images/brands/subway.svg';
import renault from '../../images/brands/renault.svg';
import schlumberger from '../../images/brands/schlumberger.svg';
import arrowTopRight from '../../images/arrow-top-right.svg';
import './about.scss';

export default function About() {
  useEffect(() => {
    setTimeout(resetScroll, 100);
  });

  return (
    <div className="about-container">
      <HomeLink />
      <div className="about-page">
        <div className="about-image-container">
          <div className="about-name title">
            <span className="first-name">Anna&nbsp;</span>
            <span className="last-name">Pivunova</span>
          </div>
          <div className="about-title title">Lead Designer</div>
          <img src={aboutImage} alt="" className="about-image" />
        </div>
        <div className="about-content">
          <div className="paragraph about-me-paragraph">
            <div className="paragraph-title">About me</div>
            <div className="paragraph-content">
              Designer that empowers brands to turn vision into value and help to build strategic
              solutions for products that play meaningful roles in people&apos;s lives.
              <br />
              <br />
              I'm striving to bring emotions to users and impact business through product design
              and people leadership. Treating design leadership as a way to bring customer value
              through teamwork and co-creation. I'm relying on behavioral design as a bridge
              between psychology, experiences, and in-person interaction.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Clients</div>
            <div className="paragraph-content">
              <div className="brands-container">
                <img src={adidas} alt="" />
                <img src={epam} alt="" />
                <img src={mcdonalds} alt="" />
              </div>
              <div className="brands-container">
                <img src={subway} alt="" />
                <img src={renault} alt="" />
                <img src={schlumberger} alt="" />
              </div>
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Hobbies</div>
            <div className="paragraph-content">
              Homemade bartender with a passion for oil painting and indoor cycling. Always ready
              to hunt for a delicious experience and beautiful film shot. Keen on psychology and
              the complexities of the human mind.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-content">
              <div className="external-links">
                <CustomLink to="https://www.linkedin.com/in/anna-pivunova/">
                  <img src={arrowTopRight} alt="" />
                  <span className="external-link-text">LinkedIn</span>
                </CustomLink>
                <CustomLink to="mailto:pivunovaanna@gmail.com">
                  <img src={arrowTopRight} alt="" />
                  <span className="external-link-text">Mail</span>
                </CustomLink>
                <CustomLink to="https://www.behance.net/ania_pivunbc2b">
                  <img src={arrowTopRight} alt="" />
                  <span className="external-link-text">Behance</span>
                </CustomLink>
                <CustomLink to="https://www.dropbox.com/s/8gmv0n6ikvp1dat/anna_pivunova_cv.pdf?dl=0">
                  <img src={arrowTopRight} alt="" />
                  <span className="external-link-text">CV</span>
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
