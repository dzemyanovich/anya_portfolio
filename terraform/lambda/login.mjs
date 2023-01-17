export const handler = async(event) => {
  return {
      isCorrectPassword: event.password === 'asdf',
  };
};
