import { AUTH_TOKEN_VAR } from './global-vars';

const correctPasswordResponse: LoginResponse = {
  isCorrectPassword: true,
  token: 'any',
};

const incorrectPasswordResponse: LoginResponse = {
  isCorrectPassword: false,
  token: 'any',
};

describe('login', () => {
  beforeEach(() => {
    jest.resetModules();
    localStorage.clear();
  });

  it('returns true', async () => {
    const { login } = require('./auth');

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(correctPasswordResponse),
    }));

    const result = await login('password');

    expect(result).toBe(true);
  });

  it('returns false', async () => {
    const { login } = require('./auth');

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(incorrectPasswordResponse),
    }));

    const result = await login('password');

    expect(result).toBe(false);
  });
});

describe('validateToken', () => {
  beforeEach(() => {
    jest.resetModules();
    localStorage.clear();
  });

  it('returns false because there is no token in local storage', async () => {
    const { validateToken } = require('./auth');

    const result: boolean = await validateToken();

    expect(result).toBe(false);
  });

  it('returns true after successful login', async () => {
    const { login, validateToken } = require('./auth');

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(correctPasswordResponse),
    }));

    await login('password');

    const result: boolean = await validateToken();

    expect(result).toBe(true);
  });

  it('returns true because token is valid', async () => {
    const { validateToken } = require('./auth');

    localStorage.setItem(AUTH_TOKEN_VAR, 'any-token');

    const validTokenResponse: ValidateTokenResponse = {
      isValidToken: true,
    };

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(validTokenResponse),
    }));

    const firstValidation: boolean = await validateToken();
    // during second validaiton request to server is not made
    const secondValidation: boolean = await validateToken();

    expect(firstValidation).toBe(true);
    expect(secondValidation).toBe(true);
  });

  it('returns false because token is invalid', async () => {
    const { validateToken } = require('./auth');

    localStorage.setItem(AUTH_TOKEN_VAR, 'any-token');

    const invalidTokenResponse: ValidateTokenResponse = {
      isValidToken: false,
    };

    jest.mock('./rest', () => ({
      post: () => Promise.resolve(invalidTokenResponse),
    }));

    const firstValidation: boolean = await validateToken();
    // during second validaiton request to server is not made
    const secondValidation: boolean = await validateToken();

    expect(firstValidation).toBe(false);
    expect(secondValidation).toBe(false);
  });
});
