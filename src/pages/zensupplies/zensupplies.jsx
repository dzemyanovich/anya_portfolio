import React from 'react';

import zensupplies from '../../images/zensupplies.png';
import zensuppliesMobile from '../../images/zensupplies-mobile.jpeg';
import zensuppliesTablet from '../../images/zensupplies-tablet.jpeg';
import zensuppliesDesktop from '../../images/zensupplies-desktop.jpeg';
import './zensupplies.scss';

export function ZensuppliesHeader() {
  return [
    <img src={zensupplies} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <div className="paragraph-title">About company</div>
      <div className="paragraph-description">
        ZenSupplies is an innovative inventory management software for dental professionals, designed to help
        organize and radically simplify a dental practice&apos;s processes, so you can spend less time managing
        your inventory, and more time managing your practice.
      </div>
    </div>,
  ];
}

export function ZensuppliesContent() {
  return (
    <div>
      <div className="zensupplies-about-container">
        <img src={zensuppliesMobile} alt="" className="zensupplies-mobile-image" />
        <div className="zensupplies-about">
          <div className="paragraph">
            <div className="product-title">ZenSupplies</div>
            <div className="paragraph-title">
              About product
            </div>
            <div className="paragraph-description">
              ZenSupplies is an industry-disrupting innovative software for inventory management, budget and cost
              analysis, as well as distributor price comparison, used by 500+ dental practices across the USA.
            </div>
          </div>
        </div>
      </div>
      <div className="zensupplies-content-container">
        <div className="zensupplies-tablet-image-container">
          <img src={zensuppliesTablet} alt="" className="zensupplies-tablet-image" />
        </div>
        <div className="zensupplies-content">
          <div className="paragraph">
            <div className="paragraph-title">Responsibilities</div>
            <div className="paragraph-description">
              As a key designer, I was responsible for the whole design process from kick- off meetings with
              stakeholder and user interviews up to the final design implementation, presentation and quality
              control.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Challenges</div>
            <div className="paragraph-description">
              <ul>
                <li>No single source of truth (digital style guide and standards)</li>
                <li>Lack of consistency across existing solutions and platforms</li>
                <li>Integration of a component-based approach & improvement of outdated design processes</li>
              </ul>
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">My role</div>
            <div className="paragraph-description">
              I was involved in the design process when MVP had already been created and approved by the customer,
              so the key objective was to extend functionality by adding new product features based on user
              interviews and analytics for both web and iOS applications. I integrated design expertise effectively
              inside an agile product development process by implementing ZenSupplies&apos;s digital standards and
              style guides (component-based approach) that reduced the effort of the dev team dramatically and
              ensured quality and consistency of experience across all platforms.
            </div>
          </div>
        </div>
      </div>
      <div className="zensupplies-results-container">
        <div className="zensupplies-results">
          <div className="paragraph">
            <div className="paragraph-title">Results</div>
            <div className="paragraph-description">
              Established & supported digital style guide and standards based on the component approach. Initiated
              and successfully proposed re-design of the main product due to the results of UX/UI audit & user
              interviews. Design improvements had a positive impact on the following KPIs: increase in organic
              traffic 68%, increase in conversation rate 25%, improvement in bounce rate 44%. Applications are
              used by 500+ dental practices across the USA.
            </div>
          </div>
        </div>
        <img src={zensuppliesDesktop} alt="" className="zensupplies-desktop-image" />
      </div>
    </div>
  );
}
