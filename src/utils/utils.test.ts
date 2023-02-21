import { MAX_MOBILE_WIDTH } from './global-vars';

describe('isWindows', () => {
  let platformGetter;

  beforeEach(() => {
    jest.resetModules();

    platformGetter = jest.spyOn(window.navigator, 'platform', 'get');
  });

  test('returns true', () => {
    platformGetter.mockReturnValue('Win');

    const { isWindows } = require('./utils');

    expect(isWindows()).toBe(true);
  });

  test('returns false', () => {
    platformGetter.mockReturnValue('Mac');

    const { isWindows } = require('./utils');

    expect(isWindows()).toBe(false);
  });
});

describe('resetScroll', () => {
  let scrollToSpy;

  beforeEach(() => {
    jest.resetModules();
  
    scrollToSpy = jest.spyOn(window, 'scrollTo');
    scrollToSpy.mockImplementation(() => {});
  });

  test('calls window.scrollTo', () => {
    const { resetScroll } = require('./utils');

    resetScroll();

    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
  });
});

describe('isMobile', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('returns true if less than max width', () => {
    window.innerWidth = MAX_MOBILE_WIDTH - 1;

    const { isMobile } = require('./utils');

    expect(isMobile()).toBe(true);
  });

  test('returns true if equal to max width', () => {
    window.innerWidth = MAX_MOBILE_WIDTH;

    const { isMobile } = require('./utils');

    expect(isMobile()).toBe(true);
  });

  test('returns false if more than max width', () => {
    window.innerWidth = MAX_MOBILE_WIDTH + 1;

    const { isMobile } = require('./utils');

    expect(isMobile()).toBe(false);
  });
});

describe('isTouchDevice', () => {
  beforeEach(() => {
    jest.resetModules();

    delete window.ontouchstart;
  });

  test('returns true', () => {
    window.ontouchstart = () => {};

    const { isTouchDevice } = require('./utils');

    expect(isTouchDevice()).toBe(true);
  });

  test('returns false', () => {
    const { isTouchDevice } = require('./utils');

    expect(isTouchDevice()).toBe(false);
  });
});
