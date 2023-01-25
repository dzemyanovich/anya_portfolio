import React from 'react';

import haviLogo from '../../images/havi-logo.png';
import transitionImage from '../../images/havi-supply-planning.jpeg';
import haviLandingPage from '../../images/havi-landing-page.jpeg';
import './havi.scss';

export function HaviHeader() {
  return [
    <img src={haviLogo} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <div className="paragraph-title">About company</div>
      <div className="paragraph-content">
        HAVI is a global, privately owned company focused on innovating, optimizing and managing the supply
        chains of leading brands.
      </div>
    </div>,
  ];
}

export function HaviContent() {
  return (
    <div>
      <img src={transitionImage} alt="" className="transition-image" />
      <div className="section-container">
        <div className="section">
          <div className="paragraph">
            <div className="product-title havi-product-title">HAVI</div>
            <div className="paragraph-title">About project</div>
            <div className="paragraph-content">
              The HAVI Group is a global company focused on innovating, optimizing and managing the supply chains of
              leading brands: McDonalds, Coca-Cola, Shell, ect. The Company offers supply chain analytics and
              logistics, packaging, freight management, warehousing and distribution, recycling, and waste solutions.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Challenges</div>
            <div className="paragraph-content">
              <ul>
                <li>No single source of truth (digital style guide and standards)</li>
                <li>Lack of consistency in the existing solution</li>
              </ul>
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Results</div>
            <div className="paragraph-content">
              <ul>
                <li>Established & supported digital style guide & standards</li>
                <li>
                  {/* wrapper div is required for correct bullet point */}
                  <div>
                    60+ screens were carefully redesigned & crafted to provide improvements to the user
                    experience. Design enhancements positively impacted the following KPIs:
                    <ul className="inner-list">
                      <li>Increase in conversation rate 28%</li>
                      <li>Impovement in bounce rate 29%</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src={haviLandingPage} alt="" className="section-image" />
      </div>
    </div>
  );
}
