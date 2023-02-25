import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

jest.mock('../../utils/utils', () => ({
  resetScroll: jest.fn(),
  isTouchDevice: jest.fn(),
}));

describe('ProductPage', () => {
  it('returns rendered component', async () => {
    const ProductPage = (await import('./product-page')).default;

    const content = 'some content';

    const productPage = shallow(
      <ProductPage>
        {content}
      </ProductPage>
    );

    expect(productPage.find('.product-page-container')).toHaveLength(1);
    expect(productPage.find('.home-link-wrapper')).toHaveLength(1);
    expect(productPage.find('.product-page')).toHaveLength(1);
    expect(productPage.find('.product-page').text()).toBe(content);
  });
});
