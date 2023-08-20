---
# Basic Metadata
alias: IAM
tags: 
description: "Securely manage access to services and resources."
# Publisher Metadata
share: true
# Site configs
aside: true
prev: false
next: false
# Dataview Query Fields
content-type: 
content-tags:
  - AWS-Products-and-Services
  - Product-Service
---
## Introduction to IAM
In AWS, all API calls need to be signed and authenticate to be able to access the resources of one and other, no matter if the resources are inside the same account or not. **Identity and Access Management (IAM)** is an AWS service that helps in managing access to AWS account and resources. It also provides a centralized view of who and what are allowed inside the AWs account ([Authentication](Authentication.md#)) and what permissions are granted to those entities ([Authorization](Authorization.md#))

![](https://d1.awsstatic.com/product-marketing/IAM/iam-how-it-works-diagram.04a2c4e4a1e8848155840676fa97ff2146d19012.png)

IAM allows the sharing of the AWS resources without the need to share the password and credentials of one user to another entity. It is also possible to maintain granular control over the entities functioning within the given environment, people or other resources such as providing read-only access and restricting the write and delete access.

- IAM is a **global service**, meaning it is not tied to any specific region, so once set, it is extended to all the regions of AWS.
- IAM is integrated with many [AWS services](../index.md#aws-products-and-services) by default.
- It allows to establish password policies such as password expiry period to ensure proper password complexities and mandatory password rotation periods for users.
- IAM supports [Multi-Factor Authentication](Multi-Factor%20Authentication.md#) (MFA)
- IAM supports identity federation, meaning if the passwords are being stored in another authentication provider, it can be used to sign into the AWS account and access its services.
- IAM is provided for all AWS users without any additional cost.


