/**
 * @jest-environment node
 */
import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

jest.mock('react-router-dom', () => ({
  useNavigate: () => {},
}));

describe('CustomLink', () => {
  it('returns rendered component', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const content = 'some content goes here';
    const customLink = shallow(
      <CustomLink to="some-path">
        {content}
      </CustomLink>
    );

    expect(customLink.text()).toBe(content);
  });

  it('calls navigate function', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const customLink = shallow(
      <CustomLink to="/adidas/smth">
        anything
      </CustomLink>
    );

    // todo: add expect
  });

  it('opens url', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const customLink = shallow(
      <CustomLink to="https://i-am-url.com">
        anything
      </CustomLink>
    );

    // todo: add expect
  });
});
