describe('isTouchDevice', () => {
  beforeEach(() => {
    jest.resetModules();

    delete window.ontouchstart;
  });

  test('returns false', () => {
    const { isTouchDevice } = require('./utils');

    expect(isTouchDevice()).toBe(false);
  });

  test('returns true', () => {
    window.ontouchstart = () => {};

    const { isTouchDevice } = require('./utils');

    expect(isTouchDevice()).toBe(true);
  });
});
