terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "1.6.6-dev"
    }
  }
}

provider "aws" {
  # Configuration options
  region = "us-east-1"
}