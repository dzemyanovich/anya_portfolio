export function post(url: any, data: any) {
  return new Promise((resolve) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.text().then((text) => {
        const responseData = text && JSON.parse(text);
        resolve(responseData);
      });
    });
  });
}
