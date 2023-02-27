import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Contact', () => {
  beforeEach(() => {
    jest.mock('../../components/home-link/home-link', () => () => 'home link goes here');
  });

  it('renders component', async () => {
    const Contact = (await import('./contact')).default;

    const contact = shallow(
      <Contact />
    );

    expect(contact.find('.contact-container')).toHaveLength(1);
    expect(contact.find('.contact-page')).toHaveLength(1);
  });
});
