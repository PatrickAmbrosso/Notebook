---
# Basic Metadata
description: "Infrastructure automation to provision and manage resources in any cloud or data center"
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
  - IaC-Tools
---
# Terraform
Terraform by [Hashicorp](./Hashicorp.md#) is an [Infrastructure as Code](./index.md#) tool offering by [HashiCorp](./Hashicorp.md#) for building, changing and versioning infrastructure safely and efficiently. It enables application software best practices to infrastructure. It is compatible with a multitude of cloud providers and services.

### Advantages
1. **IaC for Exotic Providers**
	- Terraform supports major providers including [AWS](Amazon%20Web%20Services.md#), [Azure](Microsoft%20Azure.md#) and [GCP](Google%20Cloud%20Platform.md#).
	- Other than the most common ones, it supports a wide collection of other providers as well.
	- Any cloud-based application that can expose an API can be controlled and managed by terraform.
2. **Multi-tier Applications**
	- Terraform allows to divide large complex models smaller manageable chunks/applications called as modules.
	- This helps to reduce the complexity of the configuration being used to manage the resources, while retaining some of the features of imperative IaC tools. 
3. **Disposable Environment**
	- Quickly create, replicate and destroy infrastructure in the cloud across environments.
4. **Resource Schedulers**
	- Terraform can be used to dynamically schedule and use resources
5. Multi-cloud Deployment
	- Terraform is cloud agnostic and it can provision and maintain resources across a multitude of providers.
	- One configuration can be used to maintain various cloud providers.

## Getting Started


---
## Core Concepts

### Terraform Architecture

![Terraform Core-Plugin Workflow](https://developer.hashicorp.com/_next/image?url=https%3A%2F%2Fcontent.hashicorp.com%2Fapi%2Fassets%3Fproduct%3Dterraform-docs-common%26version%3Drefs%252Fheads%252Fmain%26asset%3Dwebsite%252Fimg%252Fdocs%252Fterraform-plugin-overview.png%26width%3D4096%26height%3D728&w=3840&q=75)

Terraform is logically split into two main parts.
1. **Terraform Core**
	- It is a statically-compiled binary written in the [Go Programming Language](../../../../GoLang.md#).
	- The compiled binary is called the *Terraform CLI*.
	- The code is open-source and is published on [GitHub](https://github.com/hashicorp/terraform)
	- The primary responsibilities of Terraform Core are as follows
		-   Infrastructure as code: reading and interpolating configuration files and modules
		-   Resource state management
		-   Construction of the [Resource Graph](https://developer.hashicorp.com/terraform/internals/graph)
		-   Plan execution
		-   Communication with plugins over RPC
2. **Terraform Plugins**
	- The terraform plugins are also written in the [Go Programming Language](../../../../GoLang.md#).
	- These are executable binaries that are invoked by the Terraform Core.
	- There are two types of plugins, namely
		- *Provider Plugins*
		- *Provisioner Plugins*
	- The primary responsibilities of Provider Plugins are as follows
		-   Initialization of any included libraries used to make API calls
		-   Authentication with the Infrastructure Provider
		-   Define Resources that map to specific Services
	- The primary responsibilities of Provisioner Plugins are as follows
		-   Executing commands or scripts on the designated Resource after creation, or on destruction.

### Terraform Files and Directories
1. **Terraform Variables File (`.tfvars`)**
2. **Terraform Configuration Files (`.tf` )**
	- Files ending with a `.tf` are terraform configuration files.
	- Terraform combines all the files with a `.tf` ending and considers as a single configuration file.
	- This aids in segmenting code for organization.
	- These files are written in *HashiCorp Configuration Language (HCL)* (resembles JSON).
	- These configuration files explain terraform the desired state of the resources that need to be managed by terraform.
	- This forms the basis of the imperative approach to IaC.
3. **Terraform State File (`terraform.tfstate`)**
	* It describes the actual state of the resources managed by terraform.
	- This environment could correspond to resources, data
	- `.tfstate` files are written in JSON.
	- `.tfstate` files can be stored locally or remotely.
	- The state files tend to contain passwords and other credentials, so it is the responsibility of the user to encrypt and handle the state files.
4. **Terraform Dependency Lock File (`.terraform.lock.hcl`)**
	- Dependency locks are used only in Terraform version 0.14 or higher.
	- `.terraform.lock.hcl` file is used to lock and track the dependencies across providers and modules in use in the current terraform configuration files.
	- The syntax is NOT terraform code, but follows the same low-level syntax of HCL, thus it has the extension `.hcl`. 
	- It gets created when the `terraform init` command is run.
	- It is located in the root directory of where the configuration files exist.
	- It is recommended to include the dependency lock file in the version controlled repositories along with the terraform configuration files.
6. **Terraform Directory (`.terraform`)**


> [!caution] Handling Resources Manually
> - Avoid manually changing the resources in their respective GUIs outside of terraform.
> - This can cause huge problems in the state that is maintained by terraform.
> - Always manage the resources within terraform only.

> [!danger] Editing the `.tfstate` file
> - Do not manually edit the .tfstate file.
> - Terraform uses the .tfstate file to provision, manage and destroy resources.
> - Manual edits to this file might cause unforseen issues on the actual resources managed by terraform.

### Basic Lifecycle of a Terraform Deployment
A barebones lifecycle of operations that can be carried out in a terraform configuration would consist of the following steps.
1. **Code** - Preparing and setting up the configuration file
2. **initializing** - Initialize all the providers and dependencies of the configuration for terraform to manage the required resources.
3. **Validation** - Check if the configuration has any mistakes in syntax or logic.
4. **Plan** - Ideate the sequence of operations that is required to be performed to arrive at the said configuration.
5. **Apply** - Do all the steps to arrive at the said configuration.
6. **Destroy** - Destroy all the resources that are managed by the the configuration.

### Backend
- A backend defines where terraform stores its state data files. this is DynamoDB 


#### Managing Backend

#### Local Backend
- Store the state file locally
- Sensitive information is stored locally in plain text.
- Not collaborative
- Manual process

#### Remote Backend
- Files are stores on remote backend services such as [Amazon S3](Amazon%20Simple%20Storage%20Service.md#) or [HashiCorp Cloud](HashiCorp%20Cloud.md#).
- Data is encrypted.
- Collaboration as it is hosted on cloud.
- Possibility of automation.
- Problem is more complexity

##### HashiCorp/Terraform Cloud
- HashiCorp also has a cloud offering to manage the resources maintained by their products.
- Terraform cloud is a subset of cloud offerings by HashiCorp and can be found [here]([Terraform | HashiCorp Cloud Platform](https://cloud.hashicorp.com/products/terraform)).

##### Amazon S3 
- For this configuration, an [Amazon S3](Amazon%20Simple%20Storage%20Service.md#) bucket as well as a [DynamoDB](Amazon%20DynamoDB.md#) table needs to be set up.
- Here, the S3 bucket offers storage and the DynamoDB table is used to state locking.
- In order to manage the S3 Bucket and the DynamoDB table with terraform itself while using these two as the remote backend, a little bit of pre-configuration needs to be done.
	- Initially, the S3 Bucket and DynamoDB table are created with local backend.
	- Initialize and apply the terraform configuration.
	- Then change the backend to use S3 and DynamoDB.
	- Run `terraform apply` to apply the modified terraform configuration.
	- Terraform will not migrate the backend to the S3 Bucket and DynamoDB combination.

## Terraform Objects
1. Resources
2. Data
3. Variables
4. Output

### Resources
- s

### Data


### Variables


### Outputs




## Terraform Commands
 
> [!important] General Terraform Syntax
> `terraform [global options] <subcommand> [args]` 

> [!info] Flags in commands
> Terraform is not very strict in the syntax for flags. Flags can be written with both one dash or two dashes.
> For instance, `terraform -version` and `terraform --version` are both valid.

1. `terraform -version` - Shows the current version of terraform that is installed.
2. 
3. `terraform init` - It initializes the terraform environment
	- The command downloads the essential code for the *providers* and *modules* if any specified in the `.tf` files.
	- The configurations downloaded get stored in the `.terraform` directory.
	- **Flags:** 
4. `terraform plan` - Plans the sequence of steps needed to provision the desired environment. Checks the resources that it needs to create, modify or destroy.
	- **Flags:**
5. `terraform apply` - Executes the configuration to create, modify or destroy resources.
	- **Flags:** 
		- `--auto-approve` - Does not wait for confirmation, executes it straight, provided no variables need to be supplied.
6. `terraform destroy` - Undo for all the configuration that is currently managed by the terraform configuration. Does not touch the resources that are not maintained by the configuration. 
	- **Flags:** 
		- `--auto-approve` - Does not wait for confirmation, executes it straight, provided no variables need to be supplied.


