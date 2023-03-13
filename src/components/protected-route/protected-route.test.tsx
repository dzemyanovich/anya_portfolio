import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { render, act } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('ProtectedRoute', () => {
  beforeEach(() => {
    jest.mock('../../utils/auth', () => ({
      validateToken: () => Promise.resolve(true),
    }));
  });

  it('returns nothing because isLoading = true', async () => {
    const ProtectedRoute = (await import('./protected-route')).default;

    const protectedRoute = shallow(
      <ProtectedRoute>
        anything
      </ProtectedRoute>
    );

    expect(protectedRoute.text()).toBe('');
  });

  it('react hooks', async () => {
    const ProtectedRoute = (await import('./protected-route')).default;

    await act(async () => {
      await render(
        <ProtectedRoute>
          anything
        </ProtectedRoute>
      );
    });
  });
});
