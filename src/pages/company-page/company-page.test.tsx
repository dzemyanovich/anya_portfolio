import * as React from 'react';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { AdidasContent, AdidasHeader } from '../adidas/adidas';

Enzyme.configure({ adapter: new Adapter() });

describe('CompanyPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it('renders component #1', async () => {
    jest.mock('../../utils/utils', () => ({
      isMobile: () => false,
      isWindows: () => false,
      resetScroll: jest.fn(),
      isTouchDevice: () => false,
    }));
    const documentSpy = jest.spyOn(document, 'addEventListener');

    const CompanyPage = (await import('./company-page')).default;

    const companyPage = shallow(<CompanyPage
      title="Adidas"
      header={<AdidasHeader />}
      content={<AdidasContent />}
      className="adidas"
    />);

    expect(companyPage.find('.company-page-container')).toHaveLength(1);
    expect(companyPage.find('.company-page')).toHaveLength(1);
    expect(documentSpy).not.toBeCalled();
  });

  it('renders component #2', async () => {
    jest.mock('../../utils/utils', () => ({
      isMobile: () => true,
      isWindows: () => true,
      resetScroll: jest.fn(),
      isTouchDevice: () => true,
    }));
    const documentSpy = jest.spyOn(document, 'addEventListener');

    const CompanyPage = (await import('./company-page')).default;

    shallow(<CompanyPage
      title="Adidas"
      header={<AdidasHeader />}
      content={<AdidasContent />}
      className="adidas"
    />);

    expect(documentSpy).toBeCalled();
  });
});
