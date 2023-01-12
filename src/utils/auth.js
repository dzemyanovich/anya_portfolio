const TOKEN_VAR = 'token';
const isAuthenticatedValue = localStorage.getItem(TOKEN_VAR);

export function login(password) {
  // todo: make call to AWS lambda
  return new Promise((resolve) => {
    setTimeout(() => {
      if (password === 'asdf') {
        localStorage.setItem(TOKEN_VAR, 'some_token_will_be_here');
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}

export function isAuthenticated() {
  return isAuthenticatedValue;
}
