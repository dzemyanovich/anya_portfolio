import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { SupplyPlanning } from './supply-planning';

Enzyme.configure({ adapter: new Adapter() });

describe('SupplyPlanning', () => {
  it('renders component', async () => {
    const supplyPlanning = shallow(<SupplyPlanning />);

    expect(supplyPlanning.find('.section-container')).toHaveLength(2);
    expect(supplyPlanning.find('.section-image-container')).toHaveLength(2);
  });
});
