// todo: rename file to login.js
// todo: use js extension instead of mjs
export const handler = async(event) => {
  return {
      isCorrectPassword: event.password === 'asdf',
  };
};
