import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { AdidasHeader, AdidasContent } from './adidas';
import ManyProducts from '../../components/many-products/many-products';

Enzyme.configure({ adapter: new Adapter() });

describe('AdidasHeader', () => {
  it('renders component', async () => {
    const adidasHeader = shallow(<AdidasHeader />);

    expect(adidasHeader.find('.company-image')).toHaveLength(1);
    expect(adidasHeader.find('.company-info')).toHaveLength(1);
  });
});

describe('AdidasContent', () => {
  it('renders component', async () => {
    const adidasContent = shallow(<AdidasContent />);

    expect(adidasContent.find(ManyProducts)).toHaveLength(1);
  });
});
