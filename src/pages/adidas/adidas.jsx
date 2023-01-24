import React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import image from '../../images/adidas-shoe.jpg';

export function AdidasHeader() {
  return [
    <img src={image} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <div className="paragraph-title">About company</div>
      <div className="paragraph-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id
        augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non
        placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor
        sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare
        sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
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
