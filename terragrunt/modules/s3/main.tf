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
