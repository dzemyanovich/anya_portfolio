export const handler = async(event) => {
  return {
      // todo: store password in some AWS KeyVault
      isCorrectPassword: event.password === 'asdf',
  };
};
