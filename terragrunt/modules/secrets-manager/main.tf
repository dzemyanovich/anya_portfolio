provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_secretsmanager_secret" "auth_secrets_manager" {
  name = "${var.secrets_storage_name}"
}

resource "aws_secretsmanager_secret_version" "annapivunova_password" {
  secret_id     = aws_secretsmanager_secret.auth_secrets_manager.id
  secret_string = "${var.secrets_storage_value}"
}
