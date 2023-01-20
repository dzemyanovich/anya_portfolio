import { post } from './rest';

const TOKEN_VAR = 'token';

export function login(password) {
  return new Promise((resolve) => {
    post(`${process.env.AUTH_API}/login`, {
      password,
    }).then((data) => {
      if (data.isCorrectPassword) {
        localStorage.setItem(TOKEN_VAR, data.token);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export function validateToken() {
  return new Promise((resolve) => {
    const token = localStorage.getItem(TOKEN_VAR);
    if (!token) {
      resolve(false);
      return;
    }

    post(`${process.env.AUTH_API}/validate-token`, {
      token,
    }).then((data) => {
      resolve(data.isValidToken);
    });
  });
}
