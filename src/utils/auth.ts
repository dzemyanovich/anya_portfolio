import { post } from './rest';
import { AUTH_TOKEN_VAR } from './global-vars';

let tokenValidated = false;
let tokenValidatedResult: boolean = null;

export function login(password: string): Promise<boolean> {
  return new Promise((resolve) => {
    post<LoginRequest, LoginResponse>(`${process.env.AUTH_API}/login`, {
      password,
    }).then((data: LoginResponse) => {
      if (data.isCorrectPassword) {
        localStorage.setItem(AUTH_TOKEN_VAR, data.token);
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

    const token = localStorage.getItem(AUTH_TOKEN_VAR);
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
