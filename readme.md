# About
https://annapivunova.me/

**Tech stack**: React, React Hooks, TypeScript, sass, webpack, eslint, stylelint, jest, Cypress, AWS Lambda, AWS API Gateway, AWS S3, AWS Secrets Manager, Node.js, Terraform, Terragrunt, GitLab CI

# AWS setup guide
In order to set up AWS infrastucture **locally**:
- create `terragrunt/modules/secrets-manager/terraform.tfvars`:
```
jwt_secret = "some_value"
```
- create `terragrunt/modules/lambda/terraform.tfvars`:
```
jwt_secret = "some_value"
```


# GitLab CI/CD setup guide
Before running pipeline set the following env vars:
```
| Env var                      | Value        | Comments      |
| ---------------------------- | ------------ |               |
| AWS_ACCESS_KEY_ID            | "some_value" |               |
| AWS_SECRET_ACCESS_KEY        | "some_value" |               |
| AWS_DEFAULT_REGION           | "some_value" |               |
| TF_VAR_secrets_storage_value | "some_value" | site password |
| TF_VAR_jwt_secret            | "some_value" |               |
| CYPRESS_master_password      | "some_value" | site password |
```

# Cypress setup guide
Create `cypress.env.json` in root folder:
```
{
  "master_password": "some_value"
}
```
