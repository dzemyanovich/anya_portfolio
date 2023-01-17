resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

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

resource "aws_lambda_function" "login_lambda" {
  filename      = "lambda.zip"
  function_name = "login"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "login.handler"

  source_code_hash = filebase64sha256("lambda.zip")

  runtime = "nodejs16.x"
}
