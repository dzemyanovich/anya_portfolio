import { post } from './rest';

const TOKEN_VAR = 'token';
const isAuthenticatedValue = localStorage.getItem(TOKEN_VAR);

export function login(password) {
  return new Promise((resolve) => {
    post(process.env.AUTH_API, {
      password,
    }).then((data) => {
      if (data.isCorrectPassword) {
        // todo: get token from auth service
        localStorage.setItem(TOKEN_VAR, 'some_token_will_be_here');
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
