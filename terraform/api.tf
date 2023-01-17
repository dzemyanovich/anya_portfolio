resource "aws_api_gateway_rest_api" "auth_api" {
  name        = "Auth API"
  description = "AuthN/Z API"
}

resource "aws_api_gateway_resource" "auth_api_resource" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  parent_id   = aws_api_gateway_rest_api.auth_api.root_resource_id
  path_part   = "auth"
}

############## POST ##############

resource "aws_api_gateway_method" "login_post_method" {
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  resource_id   = aws_api_gateway_resource.auth_api_resource.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "login_post_integration" {
  rest_api_id             = aws_api_gateway_rest_api.auth_api.id
  resource_id             = aws_api_gateway_resource.auth_api_resource.id
  http_method             = aws_api_gateway_method.login_post_method.http_method
  integration_http_method = "POST"
  type                    = "AWS"
  uri                     = aws_lambda_function.login_lambda.invoke_arn
}

resource "aws_lambda_permission" "apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.login_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.auth_api.execution_arn}/*/*"
}

resource "aws_api_gateway_method_response" "login_post_method_response" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  resource_id = aws_api_gateway_resource.auth_api_resource.id
  http_method = aws_api_gateway_method.login_post_method.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
  }

  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "login_post_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  resource_id = aws_api_gateway_resource.auth_api_resource.id
  http_method = aws_api_gateway_method.login_post_method.http_method
  status_code = aws_api_gateway_method_response.login_post_method_response.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
}

############## OPTIONS (for cors) ##############

resource "aws_api_gateway_method" "login_options_method" {
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  resource_id   = aws_api_gateway_resource.auth_api_resource.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "login_options_integration" {
  rest_api_id             = aws_api_gateway_rest_api.auth_api.id
  resource_id             = aws_api_gateway_resource.auth_api_resource.id
  http_method             = aws_api_gateway_method.login_options_method.http_method
  type                    = "MOCK"

  request_templates = {
    "application/json" = <<EOF
{"statusCode": 200}
EOF
  }
}

resource "aws_api_gateway_method_response" "login_options_method_response" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  resource_id = aws_api_gateway_resource.auth_api_resource.id
  http_method = aws_api_gateway_method.login_options_method.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin" = true
  }

  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "login_options_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  resource_id = aws_api_gateway_resource.auth_api_resource.id
  http_method = aws_api_gateway_method.login_options_method.http_method
  status_code = aws_api_gateway_method_response.login_options_method_response.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'OPTIONS,POST'",
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
}

############## deployment ##############

resource "aws_api_gateway_deployment" "auth_api_deployment" {
  depends_on  = [
    aws_api_gateway_integration_response.login_post_integration_response,
    aws_api_gateway_integration_response.login_options_integration_response
  ]
  rest_api_id = aws_api_gateway_rest_api.auth_api.id

  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.auth_api_resource.id,
      aws_api_gateway_method.login_post_method.id,
      aws_api_gateway_integration.login_post_integration.id,
      aws_lambda_function.login_lambda.source_code_hash
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "auth_api_dev" {
  deployment_id = aws_api_gateway_deployment.auth_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  stage_name    = "dev"
}

resource "aws_api_gateway_stage" "auth_api_preprod" {
  deployment_id = aws_api_gateway_deployment.auth_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  stage_name    = "preprod"
}

resource "aws_api_gateway_stage" "auth_api_prod" {
  deployment_id = aws_api_gateway_deployment.auth_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  stage_name    = "prod"
}
