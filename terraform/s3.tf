# TODO: use aws_s3_bucket_website_configuration
resource "aws_s3_bucket" "prod_bucket" {
  bucket = "${var.bucket_name}"
  policy = templatefile("templates/s3-policy.json", { bucket = "${var.bucket_name}" })

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = var.common_tags
}

resource "aws_s3_bucket_acl" "prod_bucket_acl" {
  bucket = aws_s3_bucket.prod_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_ownership_controls" "bucket_ownnership" {
  bucket = aws_s3_bucket.prod_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# upload files to s3 bucket
resource "aws_s3_object" "dist" {
  for_each     = fileset("../dist/", "*")
  bucket       = aws_s3_bucket.prod_bucket.id
  key          = each.value
  source       = "../dist/${each.value}"
  etag         = filemd5("../dist/${each.value}")
  content_type  = lookup(local.mime_types, regex("\\.(?P<extension>[A-Za-z0-9]+)$", each.value).extension, "application/octet-stream")
}
