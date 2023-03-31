import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import CustomLink from '../custom-link/custom-link';
import ContactLinks from './contact-links';

Enzyme.configure({ adapter: new Adapter() });

describe('ContactLinks', () => {
  it('renders component', async () => {
    const contactLinks = shallow(
      <ContactLinks />
    );

    expect(contactLinks.find('.contact-links')).toHaveLength(1);
    expect(contactLinks.find(CustomLink)).toHaveLength(4);
  });
});
