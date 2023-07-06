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

| Script                           | Description                                                          |
| -------------------------------- | -------------------------------------------------------------------- | 
| `yarn run-local`                 | Run application with local config (development mode)                 |
| `yarn run-dev`                   | Run application with dev config (production mode)                    |
| `yarn run-preprod`               | Run application with preprod config (production mode)                |
| `yarn run-prod`                  | Run application with prod config (production mode)                   |
| `yarn build-local`               | Build application with local config (development mode)               |
| `yarn build-dev`                 | Build application with dev config (production mode)                  |
| `yarn build-preprod`             | Build application with preprod config (production mode)              |
| `yarn build-prod`                | Build application with prod config (production mode)                 |
| `yarn tg-validate`               | Validate local terragrunt config for dev env                         |
| `yarn tg-plan`                   | Build application & plan local terragrunt config for dev env         |
| `yarn tg-plan-pure`              | Plan local terragrunt config for dev env (w/o building application)  |
| `yarn tg-apply`                  | Build application & apply local terragrunt config for dev env        |
| `yarn tg-apply-pure`             | Apply local terragrunt config for dev env (w/o building application) |
| `yarn tg-destroy`                | Destroy dev env                                                      |
| `yarn build-lambda`              | Build lambda sources via yarn                                        |
| `yarn lint`                      | Lint .ts and .tsx files                                              |
| `yarn stylelint`                 | Stylelint .scss files                                                |
| `yarn stylelint-fix`             | Fix Stylint errors                                                   |
| `yarn test`                      | Run unit tests via jest w/o coverage                                 |
| `yarn test-cover`                | Run unit tests via jest with coverage                                |
| `yarn test-open`                 | Run unit tests via jest with coverage and open report file           |
| `yarn integration-dev`           | Run integration tests for dev env from GitLab CI/CD pipeline         |
| `yarn integration-dev-local`     | Run integration tests for dev env from local machine                 |
| `yarn integration-preprod`       | Run integration tests for preprod env from GitLab CI/CD pipeline     |
| `yarn integration-preprod-local` | Run integration tests for preprod env from local machine             |
| `yarn integration-prod`          | Run integration tests for prod env from GitLab CI/CD pipeline        |
| `yarn integration-prod-local`    | Run integration tests for prod env from local machine                |
| `yarn cy`                        | Open Cypress menu in the browser                                     |
| `yarn cy-local`                  | Run Cypress e2e tests on local env in Chrome, Firefox and Edge       |
| `yarn cy-local-chrome`           | Run Cypress e2e tests on local env in Chrome                         |
| `yarn cy-local-firefox`          | Run Cypress e2e tests on local env in Firefox                        |
| `yarn cy-local-edge`             | Run Cypress e2e tests on local env in Edge                           |
| `yarn cy-dev`                    | Run Cypress e2e tests on dev env in Chrome, Firefox and Edge         |
| `yarn cy-dev-chrome`             | Run Cypress e2e tests on dev env in Chrome                           |
| `yarn cy-dev-firefox`            | Run Cypress e2e tests on dev env in Firefox                          |
| `yarn cy-dev-edge`               | Run Cypress e2e tests on dev env in Edge                             |
| `yarn cy-preprod`                | Run Cypress e2e tests on preprod env in Chrome, Firefox and Edge     |
| `yarn cy-preprod-chrome`         | Run Cypress e2e tests on preprod env in Chrome                       |
| `yarn cy-preprod-firefox`        | Run Cypress e2e tests on preprod env in Firefox                      |
| `yarn cy-preprod-edge`           | Run Cypress e2e tests on preprod env in Edge                         |
| `yarn cy-prod`                   | Run Cypress e2e tests on prod env in Chrome, Firefox and Edge        |
| `yarn cy-prod-chrome`            | Run Cypress e2e tests on prod env in Chrome                          |
| `yarn cy-prod-firefox`           | Run Cypress e2e tests on prod env in Firefox                         |
| `yarn cy-prod-edge`              | Run Cypress e2e tests on prod env in Edge                            |

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
