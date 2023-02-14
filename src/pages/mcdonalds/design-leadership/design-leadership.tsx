import * as React from 'react';

import designLeadershipAbout from '../../../images/design-leadership-about.jpeg';
import designLeadershipProcess from '../../../images/design-leadership-process.jpeg';
import designLeadershipButtons from '../../../images/design-leadership-buttons.jpeg';
import designLeadershipResults from '../../../images/design-leadership-results.jpeg';
import designLeadershipSubway from '../../../images/design-leadership-subway.jpeg';
import designLeadershipMcdonalds from '../../../images/design-leadership-mcdonalds.jpeg';

export function DesignLeadership() {
  return (
    <React.Fragment>
      <div className="section-container">
        <div className="section">
          <div className="paragraph">
            <div className="product-title">Design Process</div>
            <div className="paragraph-title">Customer collaboration</div>
            <div className="paragraph-content">
              We were able to provide perfect visibility, efficiency and planning based on the team velocity via applying
              agile to the design team at enterprise scale. I created the predictable and iterative schedule of regular
              sync-up sessions where the team shares their progress, discusses priorities and justifies the ideas and
              concepts using collected research data or UX best practices. Each agreement or iteration is properly
              documented, estimated and converted to action items or tasks.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Visual Design</div>
            <div className="paragraph-content">
              Our main deliverables became a component library and a prototype of the whole system (640+ interlinked
              hand-off screens, 490+ interlinked concept screens), where everyone can see how things are integrated
              with the current functionality.
              <br />
              <br />
              It helped team to be on the same page regarding the overall picture of the application.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Pattern library</div>
            <div className="paragraph-content">
              To be sure, that the artifacts we create are consistent, we started to gather the elements of the system
              and putting an order and rules to follow in designs. Piece by piece, we developed a pattern library, which
              allowed us to reuse the components of the system across the screens.
            </div>
          </div>
        </div>
        <div className="section-image-container">
          <img src={designLeadershipAbout} alt="" className="section-image" />
        </div>
      </div>
      <div className="section-container">
        <img src={designLeadershipProcess} alt="" className="transition-image" />
      </div>
      <div className="section-container">
        <img src={designLeadershipButtons} alt="" className="transition-image" />
      </div>
      <div className="section-container">
        <div className="section">
          <div className="paragraph">
            <div className="paragraph-title">UX activities</div>
            <div className="paragraph-content">
              We validated design decisions iteratively via conducting feedback gathering and usability testing sessions
              on a regular basis, as well as interviews with end users
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Results</div>
            <div className="paragraph-content">
              <ul>
                <li>
                  Created & justified concepts helped to gain several 500k+ investments and ramped-up the project team
                  from 6 FTEs up to 17, design team from 1 FTE up to 3
                </li>
                <li>
                  The average time for the full cycle of promotion set up decreased from 19 up to 7 business days.
                  Result was achieved via the development of a single event repository, providing real-time
                  collaboration for HAVI & McDonald&apos;s, Subway, automating manual processes
                </li>
                <li>
                  As lead designer of 3 FTEs, increased customer satisfaction score of web application from 7.2 to 8.8
                  via conducting series of usability testing sessions with 10+ end users involved
                </li>
                <li>
                  A single application for promotions management is implemented. Third-party tools not used anymore.
                  As a result costs have significantly decreased
                </li>
                <li>
                  Created future vision and roadmap for 1,5 years and monitored its successful execution during
                  2 releases
                </li>
                <li>
                  Percentage of failed promotions decreased from 30% to 13%
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-image-container">
          <img src={designLeadershipResults} alt="" className="section-image" />
        </div>
      </div>
      <div className="section-container">
        <img src={designLeadershipSubway} alt="" className="transition-image" />
      </div>
      <div className="section-container">
        <img src={designLeadershipMcdonalds} alt="" className="transition-image" />
      </div>
    </React.Fragment>
  );
}
