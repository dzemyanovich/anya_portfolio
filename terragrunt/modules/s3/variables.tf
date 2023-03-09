variable "website_bucket_name" {
  type = string
}

variable "src_path" {
  type = string
}

variable "env" {
  type = string
}

variable "is_prod_env" {
  type    = bool
  default = false
}
