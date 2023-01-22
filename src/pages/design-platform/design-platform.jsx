import React from 'react';

import image from '../../images/design-platform.png';
import background from '../../images/event-optimizer-background.png';

export function DesignPlatformHeader() {
  return [
    <img src={image} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <h3 className="company-title">About company</h3>
      <div className="company-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id
        augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non
        placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor
        sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare
        sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
      </div>
    </div>,
  ];
}

export function DesignPlatformContent() {
  return [
    <img src={background} alt="" key="page-content-background" className="event-optimizer-background" />,
  ];
}
