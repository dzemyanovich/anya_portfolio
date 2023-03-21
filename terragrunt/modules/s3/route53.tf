# everything below is created only for prod env

locals {
  domain_alt_names = [ "www.${var.website_bucket_name}", "*.${var.website_bucket_name}" ]
}

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

provider "aws" {
  alias = "virginia"
  region = "us-east-1"
}

resource "aws_acm_certificate" "ssl_certificate" {
  count                     = "${var.is_prod_env ? 1 : 0}"
  provider                  = aws.virginia
  domain_name               = var.website_bucket_name
  subject_alternative_names = local.domain_alt_names
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "ssl_certificate_dns" {
  count           = "${var.is_prod_env ? length(local.domain_alt_names) + 1 : 0}"
  allow_overwrite = true
  name            = element(aws_acm_certificate.ssl_certificate[0].domain_validation_options.*.resource_record_name, count.index)
  type            = element(aws_acm_certificate.ssl_certificate[0].domain_validation_options.*.resource_record_type, count.index)
  records         = [element(aws_acm_certificate.ssl_certificate[0].domain_validation_options.*.resource_record_value, count.index)]
  zone_id         = aws_route53_zone.website_zone[0].zone_id
  ttl             = 60
}

resource "aws_acm_certificate_validation" "ssl_certificate_validate" {
  count                   = "${var.is_prod_env ? 1 : 0}"
  certificate_arn         = aws_acm_certificate.ssl_certificate[0].arn
  validation_record_fqdns = aws_route53_record.ssl_certificate_dns.*.fqdn
}
