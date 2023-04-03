import * as React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import image from '../../images/burger.png';

export function McdonaldsHeader() {
  return (
    <>
      <img src={image} alt="" className="company-image" />
      <div className="company-info">
        <div className="paragraph-title">About company</div>
        <div className="paragraph-content">
          McDonald&apos;s is the world&apos;s leading global foodservice retailer with over 37,000 locations
          in over 100 countries.  More than 90% of McDonald&apos;s restaurants worldwide are owned and
          operated by independent local business men and women
        </div>
      </div>
    </>
  );
}

export function McdonaldsContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const products = [
    {
      name: 'Event Optimizer',
      // path: '/products/mcdonalds/event-optimizer',
      path: 'https://www.dropbox.com/s/sanhkkcln5moezx/mcdonalds_event_optimizer.pdf?dl=0',
      imageSrc: null,
      category: categories.productDesign,
      year: 2019,
    },
    {
      name: 'Design Leadership',
      // path: '/products/mcdonalds/design-leadership',
      path: 'https://www.dropbox.com/s/wr6x3kyejseuh98/mcdonalds_design_leadership.pdf?dl=0',
      imageSrc: null,
      category: categories.designLeadership,
      year: 2020,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
