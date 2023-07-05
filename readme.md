# Envs

| Env      | UI URL                                                                | API URL                                                            |
| -------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ |
| dev      | http://dev4.annapivunova.me.s3-website.eu-central-1.amazonaws.com     | https://0wanj4yiyc.execute-api.eu-central-1.amazonaws.com/dev4     |
| preprod  | http://preprod1.annapivunova.me.s3-website.eu-central-1.amazonaws.com | https://qcgnmbwhui.execute-api.eu-central-1.amazonaws.com/preprod1 |
| prod     | https://annapivunova.me/                                              | https://0kqyjube0g.execute-api.eu-central-1.amazonaws.com/prod1    |

# Deployment

| Env      | Branch      | Deployment type                                                   |
| -------- | ----------- | ----------------------------------------------------------------- |
| dev      | develop     | Manual via running `yarn tg-apply` from local machine             |
| preprod  | develop     | Automatic via GitLab CI/CD (just push commit to `develop` branch) |
| prod     | master      | Automatic GitLab CI/CD  (just push commit to `master` branch)     |

# Merging

Via **rebase**, e.g. merging to `master` branch (commands should be executed one by one):

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `git checkout develop` | Go to `develop` branch                          |
| `git fetch`            | Get latest changes                              |
| `git rebase`           | Apply latest changes locally                    |
| `git checkout master`  | Go to `master` branch                           |
| `git fetch`            | Get latest changes                              |
| `git rebase`           | Apply latest changes locally                    |
| `git rebase develop`   | Apply changes from `develop` branch to `master` |
| `git push`             | Push changes                                    |

# Tech stack

React, React Hooks, TypeScript, Sass, Webpack, ESLint, Stylelint, Jest, Cypress, AWS Lambda, AWS API Gateway, AWS S3, AWS Secrets Manager, AWS Route 53, AWS Certificate Manager, AWS CloudFront, Node.js, Terraform, Terragrunt, GitLab CI

# Scripts description

| Script               | Description                                             |
| -------------------- | ------------------------------------------------------- | 
| `yarn run-local`     | Run application with local config (development mode)    |
| `yarn run-dev`       | Run application with dev config (production mode)       |
| `yarn run-preprod`   | Run application with preprod config (production mode)   |
| `yarn run-prod`      | Run application with prod config (production mode)      |
| `yarn build-local`   | Build application with local config (development mode)  |
| `yarn build-dev`     | Build application with dev config (production mode)     |
| `yarn build-preprod` | Build application with preprod config (production mode) |
| `yarn build-prod`    | Build application with prod config (production mode)    |

// TODO: add more

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

| Env var                      | Value        | Comments                                       |
| ---------------------------- | ------------ | ---------------------------------------------- |
| AWS_ACCESS_KEY_ID            | "some_value" |                                                |
| AWS_SECRET_ACCESS_KEY        | "some_value" |                                                |
| AWS_DEFAULT_REGION           | "some_value" |                                                |
| TF_VAR_secrets_storage_value | "some_value" | site password (used in terraform)              |
| TF_VAR_jwt_secret            | "some_value" |                                                |
| CYPRESS_master_password      | "some_value" | site password (used in Cypress e2e tests)      |
| MASTER_PASSWORD              | "some_value" | site password (used in jest integration tests) |

**!!! IMPORTANT !!!** `TF_VAR_secrets_storage_value` and `TF_VAR_jwt_secret` are shared between **all envs**: dev, preprod, prod

# Cypress setup guide
Create `cypress.env.json` in root folder:
```
{
  "master_password": "some_value"
}
```

# Jest integration tests setup guide
Create file `jest/integration/setup.shared.ts`:
```
process.env.MASTER_PASSWORD = 'some_value';
```
