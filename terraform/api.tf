resource "aws_api_gateway_rest_api" "auth_api" {
  name        = "Auth API"
  description = "AuthN/Z API"
}

resource "aws_api_gateway_resource" "auth_api_resource" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  parent_id   = aws_api_gateway_rest_api.auth_api.root_resource_id
  path_part   = "auth"
}

resource "aws_api_gateway_method" "login_post_method" {
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  resource_id   = aws_api_gateway_resource.auth_api_resource.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "login_integration" {
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

  source_arn = "arn:aws:execute-api:${var.region}:${var.account_id}:${aws_api_gateway_rest_api.auth_api.id}/*/${aws_api_gateway_method.login_post_method.http_method}${aws_api_gateway_resource.auth_api_resource.path}"
}

resource "aws_api_gateway_method_response" "login_method_response" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  resource_id = aws_api_gateway_resource.auth_api_resource.id
  http_method = aws_api_gateway_method.login_post_method.http_method
  status_code = "200"

  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration_response" "login_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  resource_id = aws_api_gateway_resource.auth_api_resource.id
  http_method = aws_api_gateway_method.login_post_method.http_method
  status_code = aws_api_gateway_method_response.login_method_response.status_code
}

resource "aws_api_gateway_deployment" "auth_api_deployment" {
  rest_api_id = aws_api_gateway_rest_api.auth_api.id
  
  # todo: do not make redeploy each time, add dependency on zip file with lambdas
  variables = {
    // force redeploy every time
    deployed_at = "${timestamp()}"
  }

  # triggers = {
  #   redeployment = sha1(jsonencode([
  #     aws_api_gateway_resource.auth_api_resource.id,
  #     aws_api_gateway_method.login_post_method.id,
  #     aws_api_gateway_integration.login_integration.id,
  #   ]))
  # }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "auth_api_prod" {
  deployment_id = aws_api_gateway_deployment.auth_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.auth_api.id
  stage_name    = "prod"
}
