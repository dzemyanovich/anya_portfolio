import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('HomeLink', () => {
  it('returns rendered component', async () => {
    const HomeLink = (await import('./home-link')).default;

    const customLink = shallow(
      <HomeLink />
    );

    expect(customLink.find('.brand-logo')).toHaveLength(1);
  });
});
