import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { DesignLeadership } from './design-leadership';

Enzyme.configure({ adapter: new Adapter() });

describe('DesignLeadership', () => {
  it('renders component', async () => {
    const designLeadership = shallow(<DesignLeadership />);

    expect(designLeadership.find('.section-container').length).toBeGreaterThan(1);
  });
});
