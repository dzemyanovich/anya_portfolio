import * as React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import haviLogo from '../../images/havi-logo.png';
import productItemBlack from '../../images/havi/havi-item-black.png';
import productItemWhite from '../../images/havi/havi-item-white.png';

export function HaviHeader() {
  return (
    <>
      <img src={haviLogo} alt="" className="company-image" />
      <div className="company-info">
        <div className="paragraph-title">About company</div>
        <div className="paragraph-content">
          HAVI is a global, privately owned company focused on innovating, optimizing and managing the supply
          chains of leading brands: McDonald&apos;s, KFC, IKEA, Burger King, Pizza Hut, Subway, Costa Coffee,
          etc.
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
      // path: '/products/havi/supply-planning',
      path: 'https://www.dropbox.com/s/by4jv0mo9qgx8qf/havi_supply_planning.pdf?dl=0',
      imageSrc: productItemBlack,
      category: categories.productDesign,
      year: 2020,
    },
    {
      name: 'havi.com',
      // path: '/products/havi/landing',
      path: 'https://www.dropbox.com/s/0rarnbqxk7vpx0s/havi_landing.pdf?dl=0',
      imageSrc: productItemWhite,
      category: categories.designLeadership,
      year: 2020,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
