resource "aws_iam_role" "iam_for_lambda" {
  name = "${var.env}_iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "lambda_access_secrets" {
  role       = aws_iam_role.iam_for_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/SecretsManagerReadWrite"
}

resource "aws_lambda_function" "login_lambda" {
  filename          = "lambda.zip"
  function_name     = "${var.env}-login"
  role              = aws_iam_role.iam_for_lambda.arn
  handler           = "login.handler"
  source_code_hash  = filebase64sha256("lambda.zip") # required to detect changes in lambda
  runtime           = "nodejs18.x"

  environment {
    variables = {
      SECRETS_STORAGE_NAME  = "${var.secrets_storage_name}"
      JWT_SECRET            = "${var.jwt_secret}"
      JWT_EXPIRE_DAYS       = "${var.jwt_expire_days}"
    }
  }
}

resource "aws_lambda_function" "validate_token_lambda" {
  filename          = "lambda.zip"
  function_name     = "${var.env}-validate-token"
  role              = aws_iam_role.iam_for_lambda.arn
  source_code_hash  = filebase64sha256("lambda.zip") # required to detect changes in lambda
  handler           = "validate-token.handler"
  runtime           = "nodejs18.x"

  environment {
    variables = {
      JWT_SECRET      = "${var.jwt_secret}"
      JWT_EXPIRE_DAYS = "${var.jwt_expire_days}"
    }
  }
}
