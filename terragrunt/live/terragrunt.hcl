locals {
  env                  = "dev2"
  aws_region           = "eu-central-1"
  secrets_storage_name = "${local.env}.annapivunova.me"
  src_path             = "${get_parent_terragrunt_dir()}/../../dist_dev/"
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "skip"
  contents  = <<EOF
provider "aws" {
  region = "${local.aws_region}"
}
EOF
}

remote_state {
  backend = "s3"
  config = {
    bucket = "${local.env}.annapivunova.me-terragrunt"
    region = "${local.aws_region}"
    key    = "${path_relative_to_include()}/terraform.tfstate"
  }

  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
}
