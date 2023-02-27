import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('ProtectedRoute', () => {
  it('returns nothing because isLoading = true', async () => {
    const ProtectedRoute = (await import('./protected-route')).default;

    const protectedRoute = shallow(
      <ProtectedRoute>
        anything
      </ProtectedRoute>
    );

    expect(protectedRoute.text()).toBe('');
  });

  // todo: unskip
  it.skip('renders component', async () => {
    jest.mock('../../utils/auth', () => ({
      validateToken: () => Promise.resolve(true),
    }));

    const ProtectedRoute = (await import('./protected-route')).default;

    const protectedRoute = render(
      <ProtectedRoute>
        anything
      </ProtectedRoute>
    );

    // todo: add expect
  });
});
