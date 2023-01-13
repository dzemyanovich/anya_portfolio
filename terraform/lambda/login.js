const { call } = require("file-loader");

exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const { password } = body;
  const statusCode = 200;

  callback(password === 'asdf', statusCode);
};
