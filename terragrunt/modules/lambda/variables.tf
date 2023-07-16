variable "product" {
  type    = string
  default = "annapivunova"
}

variable "env" {
  type = string
}

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
