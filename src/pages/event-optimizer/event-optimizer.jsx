import React from 'react';

import Subprojects from '../../components/subprojects/subprojects';

import image from '../../images/burger.png';

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

export function EventOptimizerContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const projects = [
    {
      value: 'project #1',
      category: categories.designLeadership,
    },
    {
      value: 'project #2',
      category: categories.productDesign,
    },
    {
      value: 'project #3',
      category: categories.productDesign,
    },
    {
      value: 'project #4',
      category: null,
    },
    {
      value: 'project #5',
      category: categories.productDesign,
    },
    {
      value: 'project #6',
      category: null,
    },
    {
      value: 'project #7',
      category: null,
    },
  ];

  return <Subprojects categories={categories} projects={projects} />;
}
