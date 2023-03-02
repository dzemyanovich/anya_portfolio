variable "secrets_storage_name" {
  type = string
}

variable "jwt_secret" {
  type = string
}

variable "jwt_expire_days" {
  type    = number
  default = 30
}

variable "env" {
  type = string
}
