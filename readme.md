# AWS setup guide
In order to set up AWS infrastucture, create `terraform/terraform.tfvars` file with the following content:
```
secrets_storage_name = "some_value"

secrets_storage_value = "some_value"

jwt_secret = "some_value"
```

# GitLab CI/CD setup guide
Before running pipeline set the following env vars (`TF_VAR_` prefix is required):
```
| Env var                      | Value        |
| ---------------------------- | ------------ |
| TF_VAR_secrets_storage_name  | "some_value" |
| TF_VAR_secrets_storage_value | "some_value" |
| TF_VAR_jwt_secret            | "some_value" |
```

# Cypress setup guide
Create `cypress.env.json` in root folder:
```
{
  "master_password": "type_real_password_here"
}
```
