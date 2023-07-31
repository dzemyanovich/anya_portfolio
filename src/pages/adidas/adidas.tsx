import * as React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import adidasShoe from '../../images/adidas-shoe.jpg';
import productItemBlack from '../../images/adidas/adidas-item-black.png';
import productItemWhite from '../../images/adidas/adidas-item-white.png';

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
      imageSrc: productItemBlack,
      category: categories.productDesign,
      year: 2022,
    },
    {
      name: 'Design Team Optimization ',
      // eslint-disable-next-line max-len
      path: 'https://pitch.com/public/8b8db27d-0d7f-428b-a54f-4ba0d50790c5',
      imageSrc: productItemWhite,
      category: categories.designLeadership,
      year: 2022,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
