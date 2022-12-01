import React from 'react';

import image from '../../images/supply-planning.png';
import background from '../../images/event-optimizer-background.png';

export function SupplyPlanningHeader() {
  return [
    <img src={image} alt="" key="project-image" />,
    <div className="project-info" key="project-info">
      <h3 className="project-title">About project</h3>
      <div className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id
        augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non
        placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor
        sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare
        sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
      </div>
    </div>,
  ];
}

export function SupplyPlanningContent() {
  return [
    <img src={background} alt="" key="page-content-background" className="event-optimizer-background" />,
  ];
}
