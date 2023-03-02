locals {
  env    = "dev1"
  region = "eu-central-1"
}

remote_state {
  backend = "s3"
  config = {
    bucket = "${local.env}.annapivunova.me-remote-state"
    region = "${local.region}"
    key    = "${path_relative_to_include()}/terraform.tfstate"
  }

  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
}
