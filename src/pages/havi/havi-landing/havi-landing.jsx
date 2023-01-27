import React, { useEffect } from 'react';

import { resetScroll } from '../../../utils/utils';

import haviLandingPage from '../../../images/havi-landing-page.jpeg';

export function HaviLanding() {
  // todo: make wrapper for all product pages: HaviLanding, SupplyPlanning, etc.
  useEffect(resetScroll);

  return (
    <div className="product-page">
      <div className="section-container">
        <div className="section">
          <div className="paragraph">
            <div className="product-title">HAVI</div>
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
        <div className="section-image-container">
          <img src={haviLandingPage} alt="" className="section-image" />
        </div>
      </div>
    </div>
  );
}
