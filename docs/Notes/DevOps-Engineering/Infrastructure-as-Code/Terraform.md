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
Terraform by is an [Infrastructure as Code](Infrastructure%20as%20Code.md#) tool offering by [HashiCorp](Hashicorp.md#) for building, changing and versioning infrastructure safely and efficiently. It enables application software best practices to infrastructure. It is *provider agnostic* and is compatible with a multitude of cloud providers and services. Terraform uses declarative configuration files written in *HashiCorp Configuration Language* or *HCL* which is a cross between YAML and JSON, with additional features.

::: details Just get me started, please...
**Terraform Basic Concepts**
1. **Declarative Configuration:** The desired state of the infrastructure is defined in a configuration file using a configuration language called *HCL*, thereby specifying the resources and their properties.
2. **Providers:** Terraform supports various cloud providers (e.g., AWS, Azure, Google Cloud) and other infrastructure technologies (e.g., Docker, Kubernetes) through provider plugins. To use a particular provider, they have to imported.
3. **Resources:** Resources are the infrastructure components defined in the configuration, such as virtual machines, databases, networks, and more.
4. **State:** Terraform is idempotent, and keeps track of the actual state of your infrastructure in a state file. This allows it to plan and execute changes while maintaining resource consistency and idempotency.

**Basic Workflow**
1. **Configuration:** The configuration (using the HCL syntax) is written to files with a `.tf`  extension. This file specifies the requirements for the resources, their attributes, and dependencies (if any).
2. **Initialization:** Start a terraform project by running `terraform init`. This downloads the necessary provider plugins and initializes the Terraform workspace.
3. **Planning:** Running `terraform plan` allows terraform to plan the steps it needs to make to set up the infrastructure as mentioned in the configuration file, helping to understand the changes before they are applied.
4. **Execution:** Running `terraform apply` spins up terraform to create/modify the infrastructure resources as defined in the configuration. Terraform will make the necessary API calls to the chosen provider(s) as configured and initialized. Note that this command can be run multiple times, and will still yield the same result (idempotency). If any changes are made to the configuration files, terraform updates the infrastructure to match the changes.
5. **Cleanup:** When a resource or if the entire infrastructure project is no longer required, the `terraform destroy` command can be used to remove them from existence. Care must be taken, as this deletes the virtual infrastructure.

**Resources**
1. *Documentation* - [Documentation | Terraform](https://developer.hashicorp.com/terraform/docs?ajs_aid=83bae346-8646-48b0-b7ff-ff7369f0858b&product_intent=terraform)
2. *Documentation* - [Terraform Best Practices](https://www.terraform-best-practices.com/)
3. *Books* - Terraform up and Running by Yevgeniy Brikman
4. *Tutorials* - [Terraform Tutorials](https://developer.hashicorp.com/terraform)
:::

## Why Terraform?
1. **Infrastructure as Code (IaC)**
    - Terraform allows you to define your infrastructure using code, which means you can version, share, and collaborate on infrastructure configurations just like you would with application code.
    - This promotes consistency, repeatability, and automation in infrastructure management.
2. **Multi-Cloud and Hybrid Cloud Support:**
    - Terraform supports multiple cloud providers (e.g., AWS, Azure, Google Cloud), as well as on-premises and hybrid cloud environments.
    - You can use a single tool to manage infrastructure across various platforms, avoiding vendor lock-in and enabling multi-cloud strategies.
3. **Declarative Syntax:**
    - Terraform uses a declarative syntax to describe the desired state of your infrastructure.
    - You specify what resources you want and their desired properties without worrying about the step-by-step process of provisioning, making configurations more human-readable and less error-prone.
4. **Resource Management:**
    - Terraform provides a wide range of resource types (e.g., virtual machines, databases, networks) for various providers.
    - You can manage diverse infrastructure components consistently through a single tool, simplifying the management of complex environments.
5. **Dependency Management:**
    - Terraform automatically identifies and manages dependencies between resources.
    - This ensures resources are created or updated in the correct order, reducing errors in your infrastructure.
6. **State Management:**
    - Terraform maintains a state file that tracks the actual state of your infrastructure.
    - This enables Terraform to understand and manage changes to your infrastructure, making it safe to apply changes without causing unexpected disruptions.
7. **Parallel Execution:**
    - Terraform can provision multiple resources concurrently, speeding up the deployment of complex infrastructures.
    - You can scale your infrastructure efficiently, reducing provisioning times.
8. **Ecosystem of Modules:**
    - Terraform has a rich ecosystem of community-contributed modules and providers.
    - You can reuse and share infrastructure configurations, saving time and effort.
9. **Security and Compliance:**
    - Terraform supports security best practices through its configurations, including access controls and secret management.
    - It helps you maintain a secure and compliant infrastructure.
10. **Extensibility:**
    - Terraform can be extended through custom providers and modules.
    - You can adapt Terraform to meet specific organizational or infrastructure requirements.
11. **Version Control Integration:**
    - Terraform configurations can be stored in version control systems (e.g., Git).
    - You can track changes, collaborate with team members, and apply DevOps practices to infrastructure management.
12. **Community and Support:**
    - Terraform has a large and active community, which means extensive documentation, tutorials, and community support.
    - You can find solutions to common challenges and get help when needed.

## The Fundamentals

### Terraform Architecture

![](https://patrickambrose-site-assets.s3.ap-south-1.amazonaws.com/Terraform-Architecture.png)

1. **Terraform Configuration Files (.tf)**
    - Configuration files are written in *HashiCorp Configuration Language (HCL)* which is similar to JSON.
    - These files *define the desired state* of your infrastructure, specifying the resources, their properties, and dependencies.
    - These configuration files have an extension of `.tf`
    - Configuration files are the heart of Terraform. They describe what infrastructure should be created or modified.
    - Services such as [VCS](Version%20Control%20System.md#) can be integrated to the configuration files to make collaboration possible and easier.
2. **Terraform CLI (Command-Line Interface)**
    - The Terraform CLI is the primary tool for *interacting with Terraform*.
    - The terraform CLI is written in [GoLang](GoLang.md#).
    - It provides various commands for *initializing*, *planning*, *applying* changes, and more.
    - The CLI is how users interact with Terraform, executing commands to manage infrastructure.
3. **Providers**
    - Providers are plugins that *enable Terraform to communicate* with specific infrastructure platforms or services (e.g., AWS, Azure, Google Cloud, Docker).
    - Each provider has its own set of resources and data sources.
    - Providers act as *intermediaries between Terraform and the target infrastructure*, allowing Terraform to create and manage resources.
4. **Terraform Core**
    - The core of Terraform, often referred to simply as "Terraform," *interprets* and *processes* configuration files, manages the state file, performs resource CRUD operations, and handles dependency resolution.
    - It is also written in [GoLang](GoLang.md#) and comes bundled with the CLI. 
    - Terraform Core is responsible for *orchestrating the entire infrastructure provisioning process*.
5. **State File**
    - Terraform maintains a state file (typically named `terraform.tfstate`) that records the *current state of the infrastructure resources*. It keeps track of resource attributes and their relationships.
    - The state file allows Terraform to determine the *difference between* the *desired* state (from configuration) and the *actual* state (from the state file).
    - It is critical for making changes without disruptions.
    - This file SHOULD NOT be edited manually.
6. **Backends (Local and Remote)**
    - Backend is where the state files are stored.
    - This can be either *local file storage* where the Terraform environment is run or it could be on the *remote/cloud* in services such as AWS S3, Azure Blob Storage or even a database.
    - State backends *affect state management and collaboration*.
    - State backends *store state files*, *enable collaboration* on terraform managed infrastructure.
7. **Operations (Local and Remote)**
    - Terraform can perform operations either *locally* where it is installed or *remotely* using a remote execution service such as *Terraform Cloud* or *HashiCorp Consul*.
    - This allows for *collaboration*, *locking*, and remote *state management*.
    - Remote operations *enhance collaboration* and provide additional features like *state locking* to *prevent concurrent changes*.
8. **External Services (Optional)**
    - External services, such as version control systems (e.g., Git), secret management tools (e.g., HashiCorp Vault), or continuous integration/continuous deployment (CI/CD) pipelines, can be integrated with Terraform to enhance its functionality.
    - External services *complement Terraform* by providing version control, secret management, automation, and other capabilities.

### Terraform Lifecycle
A barebones lifecycle of operations that can be carried out in a terraform configuration would consist of the following steps.
1. **Code** - Preparing and setting up the configuration file
2. **initializing** - Initialize all the providers and dependencies of the configuration for terraform to manage the required resources.
3. **Validation** - Check if the configuration has any mistakes in syntax or logic.
4. **Plan** - Ideate the sequence of operations that is required to be performed to arrive at the said configuration.
5. **Apply** - Do all the steps to arrive at the said configuration.
6. **Destroy** - Destroy all the resources that are managed by the the configuration.

### Basic Workflow
::: info What is in a .terraform directory?
The following files and directories will be created and be available when running a terraform environment. 
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
:::

> [!caution] Handling Resources Manually
> - Avoid manually changing the resources in their respective GUIs outside of terraform.
> - This can cause huge problems in the state that is maintained by terraform.
> - Always manage the resources within terraform only.

> [!danger] Editing the `.tfstate` file
> - Do not manually edit the .tfstate file.
> - Terraform uses the .tfstate file to provision, manage and destroy resources.
> - Manual edits to this file might cause unforseen issues on the actual resources managed by terraform.

### Best Practices

## Beyond the Basics

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

### Terraform Objects
1. Resources
2. Data
3. Variables
4. Output

### Terraform Commands
 
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


