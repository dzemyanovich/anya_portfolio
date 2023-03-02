locals {
  mime_types = jsondecode(file("${path.module}/data/mime.json"))
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "${var.website_bucket_name}"
 
  tags = {
    Environment = "${var.env}"
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
  for_each     = fileset("../../../../dist_preprod/", "*")
  bucket       = aws_s3_bucket.website_bucket.id
  key          = each.value
  source       = "../../../../dist_preprod/${each.value}"
  etag         = filemd5("../../../../dist_preprod/${each.value}")
  content_type = lookup(local.mime_types, regex("\\.(?P<extension>[A-Za-z0-9]+)$", each.value).extension, "application/octet-stream")
}
