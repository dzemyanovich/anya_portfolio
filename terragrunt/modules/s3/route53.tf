# everything below is created only for prod env

resource "aws_route53_zone" "website_zone" {
  count = "${var.is_prod_env ? 1 : 0}"
  name  = var.website_bucket_name
}

resource "aws_route53_record" "s3_record" {
  count   = "${var.is_prod_env ? 1 : 0}"
  zone_id = aws_route53_zone.website_zone[0].zone_id
  name    = var.website_bucket_name
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.website_configuration.website_domain
    zone_id                = aws_s3_bucket.website_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_s3_record" {
  count   = "${var.is_prod_env ? 1 : 0}"
  zone_id = aws_route53_zone.website_zone[0].zone_id
  name    = "www.${var.website_bucket_name}"
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.website_configuration.website_domain
    zone_id                = aws_s3_bucket.website_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "ssl_certificate" {
  domain_name               = var.website_bucket_name
  subject_alternative_names = [ "www.${var.website_bucket_name}", "*.${var.website_bucket_name}" ]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
