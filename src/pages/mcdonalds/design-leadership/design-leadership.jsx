import React from 'react';

import designLeadershipAbout from '../../../images/design-leadership-about.jpeg';
import designLeadershipProcess from '../../../images/design-leadership-process.jpeg';

export function DesignLeadership() {
  return [
    <div className="section-container" key="first-section">
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
    </div>,
    <div className="section-container" key="second-section">
      <img src={designLeadershipProcess} alt="" className="transition-image" />
    </div>,
  ];
}
