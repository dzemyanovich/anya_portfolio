import React from 'react';

import Subprojects from '../../components/subprojects/subprojects';

import image from '../../images/burger.png';

export function EventOptimizerHeader() {
  return [
    <img src={image} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <h3 className="company-title">About company</h3>
      <div className="company-description">
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
      year: 2022,
    },
    {
      value: 'project #2',
      category: categories.productDesign,
      year: 2023,
    },
    {
      value: 'project #3',
      category: categories.productDesign,
      year: 2021,
    },
    {
      value: 'project #4',
      category: null,
      year: 2020,
    },
    {
      value: 'project #5',
      category: categories.productDesign,
      year: 2022,
    },
    {
      value: 'project #6',
      category: null,
      year: 2022,
    },
    {
      value: 'project #7',
      category: null,
      year: 2022,
    },
  ];

  return <Subprojects categories={categories} projects={projects} />;
}
