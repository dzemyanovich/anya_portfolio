import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { McdonaldsHeader, McdonaldsContent } from './mcdonalds';
import ManyProducts from '../../components/many-products/many-products';

Enzyme.configure({ adapter: new Adapter() });

describe('McdonaldsHeader', () => {
  it('renders component', async () => {
    const mcdonaldsHeader = shallow(<McdonaldsHeader />);

    expect(mcdonaldsHeader.find('.company-image')).toHaveLength(1);
    expect(mcdonaldsHeader.find('.company-info')).toHaveLength(1);
  });
});

describe('McdonaldsContent', () => {
  it('renders component', async () => {
    const mcdonaldsContent = shallow(<McdonaldsContent />);

    expect(mcdonaldsContent.find(ManyProducts)).toHaveLength(1);
  });
});
