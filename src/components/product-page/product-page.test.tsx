import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('ProductPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    window.scrollTo = jest.fn();
    jest.mock('../home-link/home-link', () => () => <div className="section-container">random div</div>);
    jest.mock('../../utils/utils', () => ({
      resetScroll: jest.fn(),
      isTouchDevice: () => true,
    }));
  });

  it('returns rendered component', async () => {
    jest.mock('../../utils/utils', () => ({
      resetScroll: jest.fn(),
      isTouchDevice: () => true,
    }));

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

  it('touch device = true', async () => {
    jest.mock('../../utils/utils', () => ({
      resetScroll: jest.fn(),
      isTouchDevice: () => false,
    }));

    const windowSpy = jest.spyOn(window, 'addEventListener');

    const ProductPage = (await import('./product-page')).default;

    const productPage = render(
      <ProductPage>
        anything
      </ProductPage>
    );

    expect(windowSpy).toBeCalledTimes(1);
    const call = windowSpy.mock.calls[0];
    expect(call[0]).toBe('scroll') ;
  });
});
