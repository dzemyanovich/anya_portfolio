import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import jwt from 'jwt-simple';

export const handler = async (event) => {
  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION,
  });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: process.env.SECRETS_STORAGE_NAME,
      VersionStage: 'AWSCURRENT',
    }),
  );

  const isCorrectPassword = event.password === response.SecretString;
  const token = isCorrectPassword
    ? getJwt()
    : null;

  return {
    isCorrectPassword,
    token,
  };
};

function getJwt() {
  const payload = {
    userId: makeId(),
    created: Date.now(),
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
}

function makeId() {
  const length = 12;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
