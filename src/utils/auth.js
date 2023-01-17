const TOKEN_VAR = 'token';
const isAuthenticatedValue = localStorage.getItem(TOKEN_VAR);

export function login(password) {
  return new Promise((resolve) => {
    // todo: create wrapper func for fetch
    fetch(process.env.AUTH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
      }),
    }).then((response) => {
      response.text().then((text) => {
        const data = text && JSON.parse(text);

        if (data.isCorrectPassword) {
          // todo: get token from auth service
          localStorage.setItem(TOKEN_VAR, 'some_token_will_be_here');
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  });
}

export function isAuthenticated() {
  return isAuthenticatedValue;
}
