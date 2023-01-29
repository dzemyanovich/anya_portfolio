import React from 'react';

import ManyProducts from '../../components/many-products/many-products';

import adidasShoe from '../../images/adidas-shoe.jpg';

export function AdidasHeader() {
  return [
    <img src={adidasShoe} alt="" className="company-image" key="company-image" />,
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

export function AdidasContent() {
  const categories = {
    designLeadership: 'Design Leadership',
    productDesign: 'Product Design',
  };

  const products = [
    {
      name: 'Design Ops',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: categories.designLeadership,
      year: 2022,
    },
    {
      name: 'Filters',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: categories.productDesign,
      year: 2022,
    },
    {
      name: 'Smart Moodboards',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: categories.productDesign,
      year: 2022,
    },
    {
      name: 'CJM',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: null,
      year: 2022,
    },
    {
      name: 'Touch Table',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: categories.productDesign,
      year: 2022,
    },
    {
      name: 'Smart Mirror',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: null,
      year: 2022,
    },
    {
      name: 'Showroom Nike',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: null,
      year: 2022,
    },
    {
      name: 'Design Systems',
      // eslint-disable-next-line max-len
      path: 'https://app.pitch.com/app/presentation/358c0ed6-80bf-4996-ad09-573751e8b73c/b28c907d-7638-4054-b127-0bc106dda4ac',
      imageSrc: null,
      category: null,
      year: 2022,
    },
  ];

  return <ManyProducts categories={categories} products={products} />;
}
