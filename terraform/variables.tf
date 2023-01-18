variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "preprod_bucket_name" {
  type    = string
  default = "preprod.annapivunova.me"
}

variable "prod_bucket_name" {
  type    = string
  default = "annapivunova.me"
}

variable "secrets_storage_name" {
  type = string
}

variable "secrets_storage_value" {
  type = string
}
