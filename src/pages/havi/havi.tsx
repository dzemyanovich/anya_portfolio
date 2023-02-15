import * as React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import haviLogo from '../../images/havi-logo.png';
import haviLandingLogo from '../../images/havi-landing-logo.png';
import supplyPlanningLogo from '../../images/supply-planning-logo.jpeg';

export function HaviHeader() {
  return (
    <>
      <img src={haviLogo} alt="" className="company-image" />
      <div className="company-info">
        <div className="paragraph-title">About company</div>
        <div className="paragraph-content">
          HAVI is a global, privately owned company focused on innovating, optimizing and managing the supply
          chains of leading brands.
        </div>
      </div>
    </>
  );
}

export function HaviContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const products: Product[] = [
    {
      name: 'Supply Planning',
      path: '/products/havi/supply-planning',
      imageSrc: supplyPlanningLogo,
      category: categories.productDesign,
      year: 2020,
    },
    {
      name: 'havi.com',
      path: '/products/havi/landing',
      imageSrc: haviLandingLogo,
      category: categories.designLeadership,
      year: 2020,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
