resource "aws_s3_bucket" "prod_bucket" {
  bucket = "${var.bucket_name}"
 
  tags = var.common_tags
}

resource "aws_s3_bucket_website_configuration" "website_configuration" {
  bucket = aws_s3_bucket.prod_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.prod_bucket.id
  policy = templatefile("templates/s3-policy.json", { bucket = "${var.bucket_name}" })
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
