import { post } from './rest';

const TOKEN_VAR = 'token';
let tokenValidated = false;
let tokenValidatedResult: boolean = null;

type LoginRequest = {
  password: string,
}

type LoginResponse = {
  isCorrectPassword: boolean,
  token: string,
}

type ValidateTokenRequest = {
  token: string,
}

type ValidateTokenResponse = {
  isValidToken: boolean,
}

export function login(password: string): Promise<boolean> {
  return new Promise((resolve) => {
    post<LoginRequest, LoginResponse>(`${process.env.AUTH_API}/login`, {
      password,
    }).then((data: LoginResponse) => {
      if (data.isCorrectPassword) {
        localStorage.setItem(TOKEN_VAR, data.token);
        tokenValidated = true;
        tokenValidatedResult = true;

        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export function validateToken() {
  return new Promise((resolve) => {
    if (tokenValidated) {
      resolve(tokenValidatedResult);
      return;
    }

    const token = localStorage.getItem(TOKEN_VAR);
    if (!token) {
      resolve(false);
      return;
    }

    post<ValidateTokenRequest, ValidateTokenResponse>(`${process.env.AUTH_API}/validate-token`, {
      token,
    }).then((data: ValidateTokenResponse) => {
      tokenValidated = true;
      tokenValidatedResult = data.isValidToken;

      resolve(data.isValidToken);
    });
  });
}
