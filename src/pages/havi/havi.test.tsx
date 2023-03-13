import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { HaviHeader, HaviContent } from './havi';
import ManyProducts from '../../components/many-products/many-products';

Enzyme.configure({ adapter: new Adapter() });

describe('HaviHeader', () => {
  it('renders component', async () => {
    const haviHeader = shallow(<HaviHeader />);

    expect(haviHeader.find('.company-image')).toHaveLength(1);
    expect(haviHeader.find('.company-info')).toHaveLength(1);
  });
});

describe('HaviContent', () => {
  it('renders component', async () => {
    const haviContent = shallow(<HaviContent />);

    expect(haviContent.find(ManyProducts)).toHaveLength(1);
  });
});
