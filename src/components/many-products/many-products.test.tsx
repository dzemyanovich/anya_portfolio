import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('ManyProducts', () => {
  const categories = {
    'first': 'category_1',
    'second': 'category_2',
  };

  const products: Product[] = [
    {
      category: categories['first'],
      path: 'some-path',
      imageSrc: 'asdf',
      name: 'asdf',
      year: 111,
    },
    {
      category: categories['second'],
      path: 'some-path-2',
      imageSrc: 'asdf',
      name: 'asdf',
      year: 222,
    },
  ];

  it('returns rendered component', async () => {
    const ManyProducts = (await import('./many-products')).default;

    const manyProducts = shallow(
      <ManyProducts categories={categories} products={products} />
    );

    expect(manyProducts.find('.many-products-content')).toHaveLength(1);
    expect(manyProducts.find('.filter-panel')).toHaveLength(1);
    expect(manyProducts.find('.product-item')).toHaveLength(products.length);
    expect(manyProducts.find('.product-item-description')).toHaveLength(products.length);
  });

  it('simulate clicking', async () => {
    const ManyProducts = (await import('./many-products')).default;

    const manyProducts = shallow(
      <ManyProducts categories={categories} products={products} />
    );

    expect(manyProducts.find('.product-item')).toHaveLength(products.length);
    expect(manyProducts.find('.product-item-description')).toHaveLength(products.length);
  
    const filterOption = manyProducts.find('.filter-option:not(.checked)').first();
    const value = filterOption.find('.radio-label').text();
    const visibleProducts = products.filter(p => p.category === value);

    filterOption.simulate('click');

    expect(manyProducts.find('.product-item')).toHaveLength(visibleProducts.length);
    expect(manyProducts.find('.product-item-description')).toHaveLength(visibleProducts.length);
  });
});
