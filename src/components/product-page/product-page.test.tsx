import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('ProductPage', () => {
  const content = <div className="section-container">random div</div>;

  beforeEach(() => {
    jest.resetAllMocks();
    window.scrollTo = jest.fn();
    jest.mock('../home-link/home-link', () => () => 'home link goes here');
    jest.mock('../../utils/utils', () => ({
      resetScroll: jest.fn(),
      isTouchDevice: () => true,
    }));
  });

  it('returns rendered component', async () => {
    const ProductPage = (await import('./product-page')).default;

    const productPage = shallow(
      <ProductPage>
        {content}
      </ProductPage>
    );

    expect(productPage.find('.product-page-container')).toHaveLength(1);
    expect(productPage.find('.home-link-wrapper')).toHaveLength(1);
    expect(productPage.find('.product-page')).toHaveLength(1);
  });

  it('touch device = true', async () => {
    const windowSpy = jest.spyOn(window, 'addEventListener');

    const ProductPage = (await import('./product-page')).default;

    render(
      <ProductPage>
        {content}
      </ProductPage>
    );

    expect(windowSpy).toBeCalledTimes(1);
    const call = windowSpy.mock.calls[0];
    expect(call[0]).toBe('scroll') ;
  });
});
