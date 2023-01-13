terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "${var.region}"
}

locals {
  mime_types = jsondecode(file("${path.module}/data/mime.json"))
}
