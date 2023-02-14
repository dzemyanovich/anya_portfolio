import { post } from './rest';

const TOKEN_VAR = 'token';
let tokenValidated = false;
let tokenValidatedResult: any = null;

export function login(password: any) {
  return new Promise((resolve) => {
    post(`${process.env.AUTH_API}/login`, {
      password,
    }).then((data: any) => {
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

    post(`${process.env.AUTH_API}/validate-token`, {
      token,
    }).then((data: any) => {
      tokenValidated = true;
      tokenValidatedResult = data.isValidToken;

      resolve(data.isValidToken);
    });
  });
}
