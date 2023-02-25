terraform {
  # todo: delete commented code
  # required_providers {
  #   aws = {
  #     source  = "hashicorp/aws"
  #     version = "~> 4.16"
  #   }
  # }

  backend "s3" {
    bucket = "anya-portfolio-tf-state"
    key    = "anya-portfolio.tfstate"
    region = "eu-central-1"
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "${var.aws_region}"
}

locals {
  mime_types = jsondecode(file("${path.module}/data/mime.json"))
}
