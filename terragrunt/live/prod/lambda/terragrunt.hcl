include {
  path = find_in_parent_folders()
}

terraform {
  source = "../../..//modules/lambda"
}

locals {
  global_vars = (read_terragrunt_config(find_in_parent_folders("terragrunt.hcl"))).locals
}

inputs = {
  secrets_storage_name = local.global_vars.secrets_storage_name
  env                  = local.global_vars.env
}
