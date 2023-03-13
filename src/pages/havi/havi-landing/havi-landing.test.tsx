import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { HaviLanding } from './havi-landing';

Enzyme.configure({ adapter: new Adapter() });

describe('HaviLanding', () => {
  it('renders component', async () => {
    const haviLanding = shallow(<HaviLanding />);

    expect(haviLanding.find('.section-container')).toHaveLength(1);
    expect(haviLanding.find('.section-image-container')).toHaveLength(1);
  });
});
