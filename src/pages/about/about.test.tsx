import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('About', () => {
  beforeEach(() => {
    jest.mock('../../components/home-link/home-link', () => () => 'home link goes here');
  });

  // todo: add more content checks
  it('renders component', async () => {
    const About = (await import('./about')).default;

    const about = shallow(
      <About />
    );

    expect(about.find('.about-container')).toHaveLength(1);
    expect(about.find('.about-page')).toHaveLength(1);
    expect(about.find('.about-image-container')).toHaveLength(1);
    expect(about.find('.about-content')).toHaveLength(1);
  });

  // todo: add test for useEffect
});
