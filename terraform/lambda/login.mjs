import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

export const handler = async(event) => {
  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION,
  });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: process.env.SECRETS_STORAGE_NAME,
      VersionStage: 'AWSCURRENT',
    }),
  );

  const secret = response.SecretString;

  return {
    isCorrectPassword: event.password === secret,
  };
};
