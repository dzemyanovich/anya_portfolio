import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { act, render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('About', () => {
  beforeEach(() => {
    jest.mock('../../components/home-link/home-link', () => () => 'home link goes here');
    jest.mock('../../components/contact-links/contact-links', () => () => 'custom link goes here');
  });

  it('renders component', async () => {
    const About = (await import('./about')).default;
    const ContactLinks = (await import('../../components/contact-links/contact-links')).default;

    const about = shallow(
      <About />
    );

    expect(about.find('.about-container')).toHaveLength(1);
    expect(about.find('.about-page')).toHaveLength(1);
    expect(about.find('.about-image-container')).toHaveLength(1);
    expect(about.find('.about-content')).toHaveLength(1);
    expect(about.find(ContactLinks)).toHaveLength(1);
  });

  it('react hooks', async () => {
    const About = (await import('./about')).default;

    await act(async () => {
      await render(
        <About />
      );
    });
  });
});
