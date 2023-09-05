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
Terraform by is an [Infrastructure as Code](Infrastructure%20as%20Code.md#) tool offering by [HashiCorp](Hashicorp.md#) for building, changing and versioning infrastructure safely and efficiently. It enables application software best practices to infrastructure. It is *provider agnostic* and is compatible with a multitude of cloud providers and services. Terraform uses declarative configuration files written in *HashiCorp Configuration Language* or *HCL* which JSON, but with additional features.

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
1. **Initialization (terraform init):**
    - Initialization is the first step when working with a new or existing Terraform configuration.
    - It sets up the working directory, downloads required provider plugins, and prepares the configuration for use.
    - To initialize a terraform project, run `terraform init`
    - This command is typically run only once per project to prepare it for use.
2. **Configuration:**
    - Configurations are written in *Hashicorp Configuration Language* or *HCL* in files that end in a `.tf` extension. 
    - These files define the infrastructure by specifying the resources, their properties, and dependencies.
    - These files are continuously edited to refine the configuration as per the desired infrastructure state.
    - A terraform project can have multiple `.tf` files, and they all will be considered as one singular file when terraform processes the configuration. So it is possible to logically separate and manage the terraform configuration files.
3. **Planning**
    - Terraform allows to visualize the changes that the current configuration makes by running the `terraform plan` command.
    - This command identifies the creation, modification, or destruction of resources.
    - This command can be run as many times, as and when changes are made to the configuration files.
    - Running this command gives a glimpse of what changes terraform is about to make to the existing infrastructure to be in-line with the configuration files.
4. **Applying Changes**
    - Applying changes is where Terraform executes the actions outlined in the plan.
    - It creates, updates, or destroys resources as needed to reach the desired state.
    - This can be performed by running the `terraform apply` command.
    - This command can be run whenever changes to the configuration have been made.
    - However, even if the command is run multiple times, the final state would always be the same, thus achieving idempotency.
5. **State Management:**
    - Terraform maintains a state file (typically named `terraform.tfstate`) to track the actual state of the infrastructure the configuration file(s) manage. It records resource attributes and relationships.
    - Terraform reads and updates the state file during apply and plan operations.
    - Terraform uses the state file to manage infrastructure changes and avoid disruptions.
    - This file must not be edited manually, as this might lead to some unexpected results.
6. **Updating Configuration:**
    - As infrastructure requirements evolve, the Terraform configuration files are updated to reflect the desired state.
    - Changes might include adding new resources, modifying properties, or removing resources.
    - Thus, these configuration files with `.tf` are continuously updated and maintained to be in line with the changing infrastructure needs.
7. **Destroying Resources**
    - When resources are no longer needed, you can use the `terraform destroy` command to remove them.
    - Be cautious, as *THIS ACTION PERMANENTLY DESTROYS THE RESOURCES*.
    - To destroy resources when no longer needed, run the `terraform destroy` command.
    - This command is used sparingly, especially when the infrastructure is no longer needed. Production environments rarely see this command when in use, and this might be used in testing, dev or other environments whenever their purpose is served and they need to be decommissioned.
8. **Workspace Management (Optional):**
    - Terraform workspaces allow the maintenance of multiple environments such as *development*, *staging*, and *production* with separate state files.
    - Each workspace can have its own configuration.
    - To manage workspaces, use the following commands
        - `terraform workspace new` - To create a new workspace
        - `terraform workspace select` - To work with a specific workspace
        - `terraform workspace delete` - To remove a workspace
    - Workspaces are useful for managing configurations across different environments or teams.
9. **Collaboration (Optional):**
    - In team environments, collaboration tools like version control systems (e.g., Git), Terraform Cloud, or other CI/CD pipelines can be integrated to facilitate collaboration and automation.
    - Collaborative tools help manage changes, share configurations, and automate infrastructure deployments.

A generic version controlled terraform project tends to have the following files serving their use cases. 

| File/Directory                        | Purpose                                                  |
| ------------------------------------- | -------------------------------------------------------- |
| `.tf` Files                           | *Define* infrastructure resources and dependencies.        |
| `.tfvars` Files                       | *Provide values* for declared variables.                   |
| `.tfstate` File                       | *Track* the actual *state* of infrastructure.                |
| `.tfstate.backup` File                | *Backup* of the *state* file.                                |
| `.tfstate.lock` File                  | *Lock* file to prevent *concurrent access*.                  |
| `.terraform` Directory                | Contains *downloaded provider plugins* and internal files. |
| `terraform.tfvars.example` (Optional) | Example variable input file.                             |
| `.gitignore` (Optional)               | Excludes files/directories from version control.         |
| `README.md` (Optional)                | Project documentation and usage instructions.            |
| `.git` Directory (Optional)           | Git version control metadata.                            |

::: warning Handling Resources Manually
- Avoid manually changing the resources in their respective GUIs outside of terraform.
- This can cause huge problems in the state that is maintained by terraform.
- Always manage the resources within terraform only.
:::

::: danger Editing the `.tfstate` file
- Do not manually edit the `.tfstate` file.
- Terraform uses the `.tfstate` file to provision, manage and destroy resources.
- Manual edits to this file might cause unforeseen issues on the actual resources managed by terraform.
:::

### Basic Workflow

Following are some simple Terraform projects to understand the basic workflow in setting up a terraform project.
- [Setup a Simple HTTP server on AWS with Terraform](Setup%20a%20Simple%20HTTP%20server%20on%20AWS%20with%20Terraform.md#)
- [Setting up a Simple Nginx Server on Docker with Terraform](Setting%20up%20a%20Simple%20Nginx%20Server%20on%20Docker%20with%20Terraform.md#)

::: tip Working with Providers
When starting to work with a new provider, always checkout the documentation. Terraform's providers are usually well documented, with examples of code to implement a particular feature of the provider, so you get that copy pasta action.
:::

### Best Practices
1. **IaC under Version Control** - Store the Terraform configurations in a version control system (e.g., Git) to track changes, collaborate with team members, and maintain a history of the infrastructure code as it evolves over time. This allows to rollback to a previous working version if things go south.
2. **Use Modules to keep it DRY** - Modules are a way to simplify repeated terraform code in the IaC configuration. Modules promote DRY (Do not Repeat Yourself) code. There are several prebuilt modules available as well, that speed up the IaC development process. Modularization improves code maintainability and encourages consistency across projects.
3. **Centrally manage state files** - Using a remote backend to store and lock state files is preferred especially when more than one individual contributes to an IaC. This allows for team collaboration and state locking. It prevents concurrent access issues and provides a central location for the state file.
4. **Define variables separately** - Declare variables and input values in separate variable files. This enhances code readability and allows for easy customization.
5. **Good Naming Conventions** - Follow consistent naming conventions for resources, variables, and outputs. Naming clarity reduces confusion and errors.
6. **Better Dependency Management** - Define resource dependencies explicitly. Terraform's dependency graph should accurately represent the order of resource creation.
7. **Use Data Sources** - Leverage data sources to fetch information (e.g., AMI IDs, subnet IDs) dynamically rather than hardcoding values. This ensures that the configurations remain up-to-date.
8. **Immutable Infrastructure** - Embrace the principle of immutable infrastructure by recreating resources when updates are needed rather than modifying them in-place. This reduces configuration drift and ensures consistency.
9. **Security Best Practices** - Implement security best practices, such as secure secret management (e.g., HashiCorp Vault), strict access control, and proper handling of sensitive data.
10. **Always Review and Test** - Regularly review and test your Terraform configurations to catch issues early. Use `terraform plan` to preview changes before applying them.
11. **Docs, Docs, Docs** - Maintain comprehensive documentation that includes usage instructions, variable descriptions, and explanations of resource configurations.
12. **Integrate CI/CD** - Integrate Terraform into CI/CD pipelines for automated testing, validation, and deployment. Automated workflows improve efficiency and reduce manual errors. Almost never run terraform code manually, and always run it via a pipeline.
13. **Isolate Environments** - Isolate environments (e.g., development, staging, production) with separate Terraform workspaces or state files. This prevents accidental changes in production.
14. **Perform Monitoring and Logging** - Implement monitoring and logging for the infrastructure to detect and respond to issues promptly. Services like AWS CloudWatch and Azure Monitor can be integrated.
15. **Keep em updated** - Keep Terraform, provider plugins, and modules up-to-date to benefit from new features, improvements, and security patches.

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

## Resources
1. *Documentation* - [Documentation | Terraform](https://developer.hashicorp.com/terraform/docs?ajs_aid=83bae346-8646-48b0-b7ff-ff7369f0858b&product_intent=terraform)
2. *Documentation* - [Terraform Best Practices](https://www.terraform-best-practices.com/)
3. *Books* - Terraform up and Running by Yevgeniy Brikman
4. *Tutorials* - [Terraform Tutorials](https://developer.hashicorp.com/terraform)