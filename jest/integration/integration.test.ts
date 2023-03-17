import axios from 'axios';

// todo: set auth_api for each env dynamically
// todo: secretely set master_pasword
// dev https://0wanj4yiyc.execute-api.eu-central-1.amazonaws.com/dev4
// preprod https://qcgnmbwhui.execute-api.eu-central-1.amazonaws.com/preprod1
// prod https://0kqyjube0g.execute-api.eu-central-1.amazonaws.com/prod1
const { AUTH_API, MASTER_PASSWORD } = process.env;
const LOGIN_URL = `${AUTH_API}/login`;
const VALIDATE_TOKEN_URL = `${AUTH_API}/validate-token`;

function post<T, Y>(url: string, data: T): Promise<Y> {
  return new Promise((resolve) => {
    axios.post(url, data).then((response) => {
      resolve(response.data);
    });
  });
}

describe('login and validate-token', () => {
  it('invalid token', async () => {
    const token = 'invalid_token';

    const response: ValidateTokenResponse = await post<ValidateTokenRequest, ValidateTokenResponse>(
      VALIDATE_TOKEN_URL,
      { token },
    );

    expect(response).toMatchObject({
      isValidToken: false,
    });
  });

  it('incorrect login', async () => {
    const response: LoginResponse = await post<LoginRequest, LoginResponse>(
      LOGIN_URL,
      { password: 'incorrect password' },
    );

    expect(response).toMatchObject({
      isCorrectPassword: false,
      token: null,
    });
  });

  it('correct login', async () => {
    const loginResponse: LoginResponse = await post<LoginRequest, LoginResponse>(
      LOGIN_URL,
      { password: MASTER_PASSWORD },
    );

    expect(loginResponse).toMatchObject({
      isCorrectPassword: true,
      token: expect.any(String),
    });

    const validateTokenResponse: ValidateTokenResponse = await post<ValidateTokenRequest, ValidateTokenResponse>(
      VALIDATE_TOKEN_URL,
      { token: loginResponse.token },
    );

    expect(validateTokenResponse).toMatchObject({
      isValidToken: true,
    });
  });
});
