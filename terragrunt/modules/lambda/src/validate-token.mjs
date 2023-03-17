import jwt from 'jwt-simple';

export const handler = async (event) => {
  return {
    isValidToken: validateJwt(event.token),
  };
};

function validateJwt(token) {
  let payload = null;
  try {
    payload = jwt.decode(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error(error.errorMessage);
    return false;
  }
  const millisecondsPassed = Date.now() - payload.created;
  const jwtExpireMilliseconds = process.env.JWT_EXPIRE_DAYS * 1000 * 60 * 60 * 24;
  return millisecondsPassed < jwtExpireMilliseconds;
}
