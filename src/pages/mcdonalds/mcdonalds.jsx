import React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import image from '../../images/burger.png';
import haviLogo from '../../images/havi-logo.png';
import eventOptimizerBackground from '../../images/event-optimizer-background.png';

export function McdonaldsHeader() {
  return [
    <img src={image} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <div className="paragraph-title">About company</div>
      <div className="paragraph-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id
        augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non
        placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor
        sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare
        sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
      </div>
    </div>,
  ];
}

export function McdonaldsContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const products = [
    {
      name: 'Event Optimizer',
      path: '/products/mcdonalds/event-optimizer',
      imageSrc: haviLogo,
      category: categories.designLeadership,
      year: 2019,
    },
    {
      name: 'Design Leadership',
      path: '/products/mcdonalds/design-leadership',
      imageSrc: eventOptimizerBackground,
      category: categories.productDesign,
      year: 2020,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
