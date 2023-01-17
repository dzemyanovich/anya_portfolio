const TOKEN_VAR = 'token';
const isAuthenticatedValue = localStorage.getItem(TOKEN_VAR);

export function login(password) {
  return new Promise((resolve) => {
    // todo: enable cors only from specific urls (preprod, prod, etc.)
    // todo: enable cors for infra created via terraform
    // todo: store url in config
    const url = 'https://lxe4b8taqj.execute-api.eu-central-1.amazonaws.com/prod/auth';
    // const url = 'https://7b1gputb22.execute-api.eu-central-1.amazonaws.com/prod/my_api_resource';

    // todo: create wrapper func for fetch
    fetch(url, {
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
