############# DEV BUCKET #############

resource "aws_s3_bucket" "dev_bucket" {
  bucket = "${var.dev_bucket_name}"
 
  tags = {
    Environment = "dev"
  }
}

resource "aws_s3_bucket_website_configuration" "dev_website_configuration" {
  bucket = aws_s3_bucket.dev_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "dev_bucket_policy" {
  bucket = aws_s3_bucket.dev_bucket.id
  policy = templatefile("templates/s3-policy.json", { bucket = "${var.dev_bucket_name}" })
}

resource "aws_s3_bucket_acl" "dev_bucket_acl" {
  bucket = aws_s3_bucket.dev_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_ownership_controls" "dev_bucket_ownnership" {
  bucket = aws_s3_bucket.dev_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_object" "dist_dev" {
  # since dev is deployed from local machine it should be as close as possible to preprod/prod
  for_each     = fileset("../dist_prod/", "*") # todo: do we need both preprod and prod builds?
  bucket       = aws_s3_bucket.dev_bucket.id
  key          = each.value
  source       = "../dist_prod/${each.value}"
  etag         = filemd5("../dist_prod/${each.value}")
  content_type  = lookup(local.mime_types, regex("\\.(?P<extension>[A-Za-z0-9]+)$", each.value).extension, "application/octet-stream")
}

############# PREPROD BUCKET #############

resource "aws_s3_bucket" "preprod_bucket" {
  bucket = "${var.preprod_bucket_name}"
 
  tags = {
    Environment = "preprod"
  }
}

resource "aws_s3_bucket_website_configuration" "preprod_website_configuration" {
  bucket = aws_s3_bucket.preprod_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "preprod_bucket_policy" {
  bucket = aws_s3_bucket.preprod_bucket.id
  policy = templatefile("templates/s3-policy.json", { bucket = "${var.preprod_bucket_name}" })
}

resource "aws_s3_bucket_acl" "preprod_bucket_acl" {
  bucket = aws_s3_bucket.preprod_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_ownership_controls" "preprod_bucket_ownnership" {
  bucket = aws_s3_bucket.preprod_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_object" "dist_preprod" {
  for_each     = fileset("../dist_preprod/", "*")
  bucket       = aws_s3_bucket.preprod_bucket.id
  key          = each.value
  source       = "../dist_preprod/${each.value}"
  etag         = filemd5("../dist_preprod/${each.value}")
  content_type  = lookup(local.mime_types, regex("\\.(?P<extension>[A-Za-z0-9]+)$", each.value).extension, "application/octet-stream")
}

############# PROD BUCKET #############

resource "aws_s3_bucket" "prod_bucket" {
  bucket = "${var.prod_bucket_name}"
 
  tags = {
    Environment = "prod"
  }
}

resource "aws_s3_bucket_website_configuration" "prod_website_configuration" {
  bucket = aws_s3_bucket.prod_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "prod_bucket_policy" {
  bucket = aws_s3_bucket.prod_bucket.id
  policy = templatefile("templates/s3-policy.json", { bucket = "${var.prod_bucket_name}" })
}

resource "aws_s3_bucket_acl" "prod_bucket_acl" {
  bucket = aws_s3_bucket.prod_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_ownership_controls" "prod_bucket_ownnership" {
  bucket = aws_s3_bucket.prod_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_object" "dist_prod" {
  for_each     = fileset("../dist_prod/", "*")
  bucket       = aws_s3_bucket.prod_bucket.id
  key          = each.value
  source       = "../dist_prod/${each.value}"
  etag         = filemd5("../dist_prod/${each.value}")
  content_type  = lookup(local.mime_types, regex("\\.(?P<extension>[A-Za-z0-9]+)$", each.value).extension, "application/octet-stream")
}