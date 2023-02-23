variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "dev_bucket_name" {
  type    = string
  default = "dev.annapivunova.me"
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

variable "jwt_secret" {
  type = string
}

variable "jwt_expire_days" {
  type    = number
  default = 30
}
