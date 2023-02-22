describe('login', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns true', async () => {
    const { login } = require('./auth');

    const correctPasswordResponse: LoginResponse = {
      isCorrectPassword: true,
      token: 'any',
    };

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(correctPasswordResponse),
    }));

    const result = await login('password');

    expect(result).toBe(true);
  });

  it('returns false', async () => {
    const { login } = require('./auth');

    const incorrectPasswordResponse: LoginResponse = {
      isCorrectPassword: false,
      token: 'any',
    };

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(incorrectPasswordResponse),
    }));

    const result = await login('password');

    expect(result).toBe(false);
  });
});
