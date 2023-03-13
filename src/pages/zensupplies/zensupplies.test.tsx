import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { ZensuppliesHeader, ZensuppliesContent } from './zensupplies';

Enzyme.configure({ adapter: new Adapter() });

describe('ZensuppliesHeader', () => {
  it('renders component', async () => {
    const zensuppliesHeader = shallow(<ZensuppliesHeader />);

    expect(zensuppliesHeader.find('.company-image')).toHaveLength(1);
    expect(zensuppliesHeader.find('.company-info')).toHaveLength(1);
  });
});

describe('ZensuppliesContent', () => {
  it('renders component', async () => {
    const zensuppliesContent = shallow(<ZensuppliesContent />);

    expect(zensuppliesContent.find('.company-single-product')).toHaveLength(1);
  });
});
