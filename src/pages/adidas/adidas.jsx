import React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import image from '../../images/adidas.jpg';

export function AdidasHeader() {
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

export function AdidasContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const products = [
    {
      name: 'product #1',
      category: categories.designLeadership,
      year: 2022,
    },
    {
      name: 'product #2',
      category: categories.productDesign,
      year: 2023,
    },
    {
      name: 'product #3',
      category: categories.productDesign,
      year: 2021,
    },
    {
      name: 'product #4',
      category: null,
      year: 2020,
    },
    {
      name: 'product #5',
      category: categories.productDesign,
      year: 2022,
    },
    {
      name: 'product #6',
      category: null,
      year: 2022,
    },
    {
      name: 'product #7',
      category: null,
      year: 2022,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
