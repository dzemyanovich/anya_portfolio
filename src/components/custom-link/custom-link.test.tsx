import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

window.open = jest.fn();

function defineWindowLocation() {
  const mockResponse = jest.fn();

  Object.defineProperty(window, 'location', {
    value: {
      hash: {
        endsWith: mockResponse,
        includes: mockResponse,
      },
      assign: mockResponse,
    },
    writable: true,
  });
}

describe('CustomLink', () => {
  it('returns rendered component', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const content = 'some content goes here';
    const customLink = shallow(
      <CustomLink to="some-path">
        {content}
      </CustomLink>
    );

    expect(customLink.prop('className').includes('custom-link')).toBe(true);
    expect(customLink.text()).toBe(content);
    expect(window.open).not.toBeCalled();
    expect(navigate).not.toBeCalled();
  });

  it('renders custom className', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const customClassName = 'just some name';

    const customLink = shallow(
      <CustomLink to="some-path" className={customClassName}>
        anything
      </CustomLink>
    );

    const classNameProp = customLink.prop('className');

    expect(classNameProp.includes('custom-link')).toBe(true);
    expect(classNameProp.includes(customClassName)).toBe(true);
  });

  it('calls navigate function', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const customLink = shallow(
      <CustomLink to="/adidas/smth">
        anything
      </CustomLink>
    );

    customLink.simulate('click');
    expect(window.open).not.toBeCalled();
    expect(navigate).toBeCalledTimes(1);
  });

  it('opens url', async () => {
    const CustomLink = (await import('./custom-link')).default;

    const customLink = shallow(
      <CustomLink to="https://i-am-url.com">
        anything
      </CustomLink>
    );

    customLink.simulate('click');
    expect(window.open).toBeCalledTimes(1);
    expect(navigate).not.toBeCalled();
  });

  it('opens mailto', async () => {
    defineWindowLocation();

    const CustomLink = (await import('./custom-link')).default;

    const customLink = shallow(
      <CustomLink to="mailto:some_email@mail.com">
        anything
      </CustomLink>
    );

    customLink.simulate('click');
    expect(window.open).not.toBeCalled();
    expect(navigate).not.toBeCalled();
  });
});
