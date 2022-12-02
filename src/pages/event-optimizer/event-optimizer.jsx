import React from 'react';

import image from '../../images/burger.png';
import background from '../../images/event-optimizer-background.png';

export function EventOptimizerHeader() {
  return [
    <img src={image} alt="" className="project-image" key="project-image" />,
    <div className="project-info" key="project-info">
      <h3 className="project-title">About project</h3>
      <div className="project-description">
        Event Optimizer is an information management platform for QSR industry dedicated to collect,
        visually track and analyze key data points of McDonald&apos;s & Subway based on data science
        (marketing / stock / sales / results of previous promotions / risks, etc.) for automated intelligent
        forecasting. The tool is fully customizable to meet the specific needs of a department and company
        and F...
      </div>
    </div>,
  ];
}

// TODO: add more content
export function EventOptimizerContent() {
  return [
    <img src={background} alt="" key="page-content-background" className="event-optimizer-background" />,
  ];
}
