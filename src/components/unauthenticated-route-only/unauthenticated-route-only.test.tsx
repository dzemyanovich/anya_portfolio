import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('UnauthenticatedRouteOnly', () => {
  it('returns nothing because isLoading = true', async () => {
    const UnauthenticatedRouteOnly = (await import('./unauthenticated-route-only')).default;

    const unauthenticatedRouteOnly = shallow(
      <UnauthenticatedRouteOnly>
        anything
      </UnauthenticatedRouteOnly>
    );

    expect(unauthenticatedRouteOnly.text()).toBe('');
  });

  // todo: unskip
  it.skip('renders component', async () => {
    jest.mock('../../utils/auth', () => ({
      validateToken: () => Promise.resolve(true),
    }));

    const UnauthenticatedRouteOnly = (await import('./unauthenticated-route-only')).default;

    const unauthenticatedRouteOnly = render(
      <UnauthenticatedRouteOnly>
        anything
      </UnauthenticatedRouteOnly>
    );

    // todo: add expect
  });
});
