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

describe('isWindows', () => {
  let platformGetter;

  beforeEach(() => {
    platformGetter = jest.spyOn(window.navigator, 'platform', 'get');

    jest.resetModules();
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
