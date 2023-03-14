import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Products', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it('renders component #1', async () => {
    jest.mock('../../utils/utils', () => ({
      isMobile: () => false,
      resetScroll: jest.fn(),
    }));

    const Products = (await import('./products')).default;

    const products = shallow(<Products />);

    expect(products.find('.products-page')).toHaveLength(1);
    expect(products.find('.company-logos')).toHaveLength(1);
  });

  it('renders component #2', async () => {
    jest.mock('../../utils/utils', () => ({
      isMobile: () => true,
      resetScroll: jest.fn(),
    }));

    const Products = (await import('./products')).default;

    shallow(<Products />);
  });
});
