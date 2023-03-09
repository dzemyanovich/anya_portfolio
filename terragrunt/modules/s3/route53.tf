resource "aws_route53_zone" "website_zone" {
  # create route53 only for prod env
  count = "${var.is_prod_env ? 1 : 0}"
  name  = var.website_bucket_name
}

resource "aws_route53_record" "s3_record" {
  # create route53 only for prod env
  count   = "${var.is_prod_env ? 1 : 0}"
  zone_id = aws_route53_zone.website_zone[0].zone_id
  name    = var.website_bucket_name
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.website_configuration.website_endpoint
    zone_id                = aws_s3_bucket.website_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}
