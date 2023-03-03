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
  website_bucket_name = "${local.global_vars.env}.annapivunova.me"
  env                 = "${local.global_vars.env}"
  src_path            = "${get_parent_terragrunt_dir()}/../../dist_preprod/"
}
