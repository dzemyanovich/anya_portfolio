import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { act, render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('UnauthenticatedRouteOnly', () => {
  beforeEach(() => {
    jest.mock('../../utils/auth', () => ({
      validateToken: () => Promise.resolve(false),
    }));
  });

  it('returns nothing because isLoading = true', async () => {
    const UnauthenticatedRouteOnly = (await import('./unauthenticated-route-only')).default;

    const unauthenticatedRouteOnly = shallow(
      <UnauthenticatedRouteOnly>
        anything
      </UnauthenticatedRouteOnly>
    );

    expect(unauthenticatedRouteOnly.text()).toBe('');
  });

  it('react hooks', async () => {
    const UnauthenticatedRouteOnly = (await import('./unauthenticated-route-only')).default;

    await act(async () => {
      await render(
        <UnauthenticatedRouteOnly>
          anything
        </UnauthenticatedRouteOnly>
      );
    });
  });
});
