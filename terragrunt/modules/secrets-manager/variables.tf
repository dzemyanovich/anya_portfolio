variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

# variable "bucket_name" {
#   type    = string
# }

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
