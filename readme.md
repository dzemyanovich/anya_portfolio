# AWS setup guide
In order to set up AWS infrastucture, create `terraform/terraform.tfvars` file with the following content:
```
secrets_storage_name = ""

secrets_storage_value = ""

jwt_secret = ""
```
Values should be set accordingly

# Cypress setup guide
Create `cypress.env.json` in root folder:
```
{
  "master_password": "my_password_goes_here"
}
```
Instead of `my_password_goes_here` type in real password
