# Create AWS Lambda Functions in a VPC using CDK

[![Mikaeel Khalid](https://badgen.now.sh/badge/by/mikaeelkhalid/purple)](https://github.com/mikaeelkhalid)

This repository contains code for provisioning an AWS Lambda function within a VPC and enabling it to access the internet using AWS Cloud Development Kit (CDK).

## Table of Contents

- [Introduction](#introduction)
- [Architecture Overview](#architecture-overview)
- [Setup](#setup)
- [Deployment](#deployment)
- [Cleanup](#cleanup)
- [Code Explanation](#code-explanation)
- [Lambda Function Code](#lambda-function-code)

## Architecture Overview

1. **VPC Creation**: A VPC with both public and private subnets is created.
2. **NAT Gateway**: A NAT Gateway is provisioned in the public subnet to allow internet access from the private subnet.
3. **Lambda Function**: The Lambda function is launched in the private subnet with necessary permissions and configurations to manage network interfaces and access the internet via the NAT Gateway.

## Setup

### Prerequisites

- Node.js (v12.x or later)
- AWS CDK (v2.x or later)
- AWS CLI configured with appropriate permissions

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mikaeelkhalid/lambda-function-vpc-aws-cdk.git
   cd lambda-function-vpc-aws-cdk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Deployment

To deploy the stack, run:

```bash
cdk deploy
```

This command will provision the VPC, NAT Gateway, and the Lambda function with the required configurations.

## Cleanup

To delete the resources and avoid ongoing costs from the NAT Gateway, run:

```bash
cdk destroy
```

## Code Explanation

For detailed explanation and code snippets, refer to the following [blog post](https://blog.mikaeels.com/provisioning-a-lambda-function-in-a-vpc-using-aws-cdk).

**Remember to destroy the stack to avoid unnecessary costs.**

