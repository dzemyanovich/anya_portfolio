import { post } from './rest';

const TOKEN_VAR = 'token';
const isAuthenticatedValue = localStorage.getItem(TOKEN_VAR);

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

// todo: call to API should be made to check if token is correct one
export function isAuthenticated() {
  return isAuthenticatedValue;
}
