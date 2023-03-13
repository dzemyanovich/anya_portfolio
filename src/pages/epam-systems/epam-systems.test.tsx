import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { EpamSystemsHeader, EpamSystemsContent } from './epam-systems';

Enzyme.configure({ adapter: new Adapter() });

describe('EpamSystemsHeader', () => {
  it('renders component', async () => {
    const epamSystemsHeader = shallow(<EpamSystemsHeader />);

    expect(epamSystemsHeader.find('.company-image')).toHaveLength(1);
    expect(epamSystemsHeader.find('.company-info')).toHaveLength(1);
  });
});

describe('EpamSystemsContent', () => {
  it('renders component', async () => {
    const epamSystemsContent = shallow(<EpamSystemsContent />);

    expect(epamSystemsContent.find('.company-single-product')).toHaveLength(1);
  });
});
