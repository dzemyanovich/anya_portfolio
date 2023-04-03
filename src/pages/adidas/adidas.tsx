import * as React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import adidasShoe from '../../images/adidas-shoe.jpg';
import blackBackground from '../../images/adidas/black-background.png';
import whiteBackground from '../../images/adidas/white-background.png';

export function AdidasHeader() {
  return (
    <>
      <img src={adidasShoe} alt="" className="company-image" />
      <div className="company-info">
        <div className="paragraph-title">About company</div>
        <div className="paragraph-content">
          Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach,
          Bavaria, that designs and manufactures shoes, clothing and accessories. It is the largest
          sportswear manufacturer in Europe
        </div>
      </div>
    </>
  );
}

export function AdidasContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const products: Product[] = [
    {
      name: 'Smart Moodboard',
      // eslint-disable-next-line max-len
      path: 'https://pitch.com/public/19462a56-5560-4059-887a-fbffe5632407',
      imageSrc: blackBackground,
      category: categories.productDesign,
      year: 2022,
    },
    {
      name: 'KPI Jam',
      // eslint-disable-next-line max-len
      path: 'https://pitch.com/public/dd4cbaa8-a0e8-45bc-be75-b8e2c0224b51',
      imageSrc: whiteBackground,
      category: categories.designLeadership,
      year: 2022,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
