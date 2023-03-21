locals {
  mime_types = jsondecode(file("${path.module}/data/mime.json"))
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = var.website_bucket_name

  tags = {
    Environment = "${var.env}"
  }
}

resource "aws_s3_bucket" "subdomain_bucket" {
  # create bucket "www.annapivunova.me" only for prod env
  count = "${var.is_prod_env ? 1 : 0}"
  bucket = "www.${var.website_bucket_name}"

  tags = {
    Environment = "${var.env}"
  }
}

resource "aws_s3_bucket_website_configuration" "subdomain_configuration" {
  count = "${var.is_prod_env ? 1 : 0}"
  bucket = aws_s3_bucket.subdomain_bucket[0].bucket

  redirect_all_requests_to {
    host_name = var.website_bucket_name
    protocol  = "http" # todo: change to https
  }
}

resource "aws_s3_bucket_website_configuration" "website_configuration" {
  bucket = aws_s3_bucket.website_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = templatefile("data/s3-policy.json", { bucket = "${var.website_bucket_name}" })
}

resource "aws_s3_bucket_acl" "website_bucket_acl" {
  bucket = aws_s3_bucket.website_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_ownership_controls" "website_bucket_ownnership" {
  bucket = aws_s3_bucket.website_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_object" "source_code" {
  for_each     = fileset("${var.src_path}", "*")
  bucket       = aws_s3_bucket.website_bucket.id
  key          = each.value
  source       = "${var.src_path}${each.value}"
  etag         = filemd5("${var.src_path}${each.value}")
  content_type = lookup(local.mime_types, regex("\\.(?P<extension>[A-Za-z0-9]+)$", each.value).extension, "application/octet-stream")
}
