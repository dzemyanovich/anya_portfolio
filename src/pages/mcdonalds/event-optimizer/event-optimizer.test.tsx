import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { EventOptimizer } from './event-optimizer';

Enzyme.configure({ adapter: new Adapter() });

describe('EventOptimizer', () => {
  it('renders component', async () => {
    const eventOptimizer = shallow(<EventOptimizer />);

    expect(eventOptimizer.find('.section-container').length).toBeGreaterThan(1);
  });
});
