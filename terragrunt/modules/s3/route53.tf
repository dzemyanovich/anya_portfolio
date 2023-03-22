# everything below is created only for prod env

locals {
  domain_alt_names = ["www.${var.website_bucket_name}", "*.${var.website_bucket_name}"]
  s3_origin_id     = "my_s3_origin"
}

resource "aws_route53_zone" "website_zone" {
  count = "${var.is_prod_env ? 1 : 0}"
  name  = var.website_bucket_name
}

provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

############# SSL #############

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
  provider                = aws.virginia
  certificate_arn         = aws_acm_certificate.ssl_certificate[0].arn
  validation_record_fqdns = aws_route53_record.ssl_certificate_dns.*.fqdn
}

############# CloudFront #############

resource "aws_cloudfront_distribution" "s3_distribution" {
  count = "${var.is_prod_env ? 1 : 0}"

  origin {
    domain_name = aws_s3_bucket_website_configuration.website_configuration.website_endpoint
    origin_id   = local.s3_origin_id

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  logging_config {
    include_cookies = false
    bucket          = "${var.website_bucket_name}.s3.amazonaws.com"
    prefix          = "cloudfront_logs"
  }

  aliases = ["${var.website_bucket_name}","www.${var.website_bucket_name}"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${aws_acm_certificate.ssl_certificate[0].arn}"
    ssl_support_method = "sni-only"
  }

  depends_on = [aws_acm_certificate.ssl_certificate[0]]
}

resource "aws_route53_record" "cloud_front_record" {
  count   = "${var.is_prod_env ? 1 : 0}"
  zone_id = aws_route53_zone.website_zone[0].zone_id
  name    = var.website_bucket_name
  type    = "A"

  alias {
    name                   = replace(aws_cloudfront_distribution.s3_distribution[0].domain_name, "/[.]$/", "")
    zone_id                = aws_cloudfront_distribution.s3_distribution[0].hosted_zone_id
    evaluate_target_health = true
  }

  depends_on = [aws_cloudfront_distribution.s3_distribution[0]]
}
