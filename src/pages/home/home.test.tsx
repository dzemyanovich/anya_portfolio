import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Home from './home';
import HomeLink from '../../components/home-link/home-link';
import CustomLink from '../../components/custom-link/custom-link';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  it('renders component', async () => {
    const home = shallow(<Home />);

    expect(home.find('.pivunova-brand')).toHaveLength(1);
    expect(home.find('.designer-title')).toHaveLength(1);
    expect(home.find(HomeLink)).toHaveLength(1);
    expect(home.find(CustomLink)).toHaveLength(3);
  });
});
