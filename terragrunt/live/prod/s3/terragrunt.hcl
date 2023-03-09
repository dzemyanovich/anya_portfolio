include {
  path = find_in_parent_folders()
}

terraform {
  source = "../../..//modules/s3"
}

locals {
  global_vars = (read_terragrunt_config(find_in_parent_folders("terragrunt.hcl"))).locals
}

inputs = {
  website_bucket_name = "annapivunova.me"
  env                 = local.global_vars.env
  src_path            = local.global_vars.src_path
  is_prod_env         = true
}
