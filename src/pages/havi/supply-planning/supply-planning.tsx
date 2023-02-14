import * as React from 'react';

import supplyPlanningTablet from '../../../images/supply-planning-tablet.jpeg';
import supplyPlanningDesktop from '../../../images/supply-planning-desktop.jpeg';

export function SupplyPlanning() {
  return (
    <React.Fragment>
      <div className="section-container">
        <div className="section">
          <div className="paragraph">
            <div className="product-title">Supply Planning</div>
            <div className="paragraph-title">About project</div>
            <div className="paragraph-content">
              Historically, QSR supply chains didn&apos;t have a timely, synchronized, single source of truth for
              supply data. HAVI Supply (Supply Planning) is a single view of inventory for the US Market that
              accurately reflects supply for all products at every location and stays synchronized across each
              level in the supply chain, as transactions are received throughout the day.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Challenges</div>
            <div className="paragraph-content">
              <ul>
                <li>
                  Development of ecosystem for the Event Optimizer & Supply Planning product family. Supply
                  Planning had to follow the style, experience, and technical requirements to maintain the
                  holistic experience
                </li>
                <li>Huge amount of data and documentation to analyze</li>
                <li>Complexity of the domain</li>
                <li>Limited amount of resources</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-image-container">
          <img src={supplyPlanningTablet} alt="" className="section-image" />
        </div>
      </div>
      <div className="section-container reverse">
        <div className="section-image-container">
          <img src={supplyPlanningDesktop} alt="" className="section-image" />
        </div>
        <div className="section">
          <div className="paragraph">
            <div className="paragraph-title">Results</div>
            <div className="paragraph-content">
              Real-time collaboration, automation of manual processes, replacing existing tools and dozens of
              Excel spreadsheets were achieved via the creation of a human-centered solution that is more
              efficient, helped reduce the cost of the toolset for HAVI & McDonald&apos;s, organize a single
              source of data storage
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Achievements</div>
            <div className="paragraph-content">
              <ul>
                <li>
                  Successful presale of the application concept to the HAVI and McDonald&apos;s&apos; leadership
                  triggered the launch of a new stream
                </li>
                <li>Established ecosystem for the Event Optimizer & Supply Planning product family</li>
                <li>
                  The solution is used by 10 000+ DCs (Distribution centers), HUBs (Hub Centers), Restaurants
                  and Suppliers all over the U
                </li>
                <li>
                  As a key designer set up the design process & visual direction for new product starting from
                  the discovery phase up to final delivery & support, including version control and distributed
                  contribution
                </li>
                <li>
                  Delivered component library based on atomic design approach and interactive prototype of the
                  whole system (65+ interlinked hand-off screens, 115+ concept screens)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
