---
# Basic Metadata
description: "Managing and provisioning computer data centers through machine-readable definition files"
tags: 
alias: 
# Publisher Metadata
share: true
# Site configs
aside: true
prev: false
next: false
# Dataview Query Fields
content-type: 
content-tags:
  - tag 1
---
# Infrastructure as Code (IaC)
**Infrastructure as Code** (**IaC**) is a practice in software engineering that involves managing and provisioning infrastructure using *code and automation tools*. It allows defining and managing infrastructure, such as servers, networks, and databases, using code rather than manual processes.
This code is typically written using configuration files, and it can be versioned and stored in a version control system such as git. IaC brings *consistency*, *repeatability*, and *efficiency* to infrastructure management, making it easier to deploy and manage complex systems while reducing the chances of human errors.

The following table aims to compare manual configuration to an IaC approach

| Aspect                  | Manual Configuration                      | Infrastructure as Code (IaC)                |
|-------------------------|-------------------------------------------|---------------------------------------------|
| **Consistency**             | Prone to inconsistencies                  | Ensures uniform configurations              |
| **Automation**              | Manual tasks, time-consuming              | Automated provisioning and setup            |
| **Version Control**         | Changes not easily versioned              | Code stored in version control systems      |
| **Scalability**             | Difficulty scaling up                     | Supports consistent scaling                 |
| **Documentation**           | Separate documentation required           | Infrastructure code serves as documentation |
| **Reproducibility**         | Inconsistent environments                 | Reliable recreation of exact setups         |
| **Dependency**              | Relies on specific personnel              | Reduces dependency on individuals           |
| **Security**                | Vulnerabilities due to inconsistent setup | Enforces security best practices            |
| **Auditing**                | Difficult to track changes                | Changes tracked in version control          |
| **Updates and Maintenance** | Complex and time-consuming updates        | Streamlines updates and maintenance         |

## Types of IaC tools in the wild
IaC tools come in many shapes and sizes serving a specific problem they set out to solve. Based on this, following are some of the most commonly used IaC tool types.

1. **Configuration Management Tools**
    - *Tools* - [Ansible](Ansible.md#), [Puppet](Puppet.md#), [Chef](Chef.md#), SaltStack
    - Focus on detailed automation of configuration and management of individual servers and nodes.
    - Usually agent-based, where agents are installed on the nodes themselves nodes or on a separate master node to manage the configuration process.
2. **Orchestration Tools**
    - *Tools* - [Terraform](./Terraform.md#), [CloudFormation](AWS%20CloudFormation.md#), Azure Resource Manager
    - Concentrate on provisioning and managing cloud resources, networks, and services across different platforms.
    - Define infrastructure using declarative code and templates.
3. **Server Templating Tools**
    - *Tools* - [Packer](Packer.md#), [Docker](../../../../Docker.md#)
    - Focus on creating custom server images or containers that can be deployed consistently across environments.
    - Enables the creation of immutable infrastructure.
4. **Container Orchestration Tools**
    - *Tools* - [Kubernetes](Kubernetes.md#), [Docker Swarm](Docker%20Swarm.md#), [Amazon ECS](Amazon%20Elastic%20Container%20Service.md#)
    - Primarily designed to manage and automate the deployment of containers at scale.
    - Define how containers are deployed, scaled, and managed.
5. **Infrastructure Provisioning Tools**
    - *Tools* - [Terraform](./Terraform.md#), [CloudFormation](AWS%20CloudFormation.md#), [Pulumi](Pulumi.md#)
    - Concentrate on provisioning infrastructure resources, including virtual machines, networks, and storage.
6. **Application Deployment Tools**
    - *Tools* - [Jenkins](Jenkins.md#), [Travis CI](Travis%20CI.md#), GitLab CI/CD
    - Not exclusive to IaC, but often integrated for deploying applications along with their required infrastructure.
7. **Hybrid Tools**
    - *Tools* - Ansible Terraform Modules, AWS CDK
    - Combine configuration management and orchestration for more comprehensive infrastructure management.

## Tools and Services
1. [Terraform](./Terraform.md#)