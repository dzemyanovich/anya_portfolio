import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it('renders component', async () => {
    const Login = (await import('./login')).default;

    const login = shallow(<Login />);

    expect(login.find('.login-page')).toHaveLength(1);
  });
});
