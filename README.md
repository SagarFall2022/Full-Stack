# AWS Serverless File Uploader

AWS Serverless File Uploader is a modern full-stack project built using ReactJS and AWS services, including Lambda, API Gateway, S3, and DynamoDB. The project provides a responsive user interface that allows users to enter text and upload files. This triggers a serverless architecture, which is built using AWS CDK and follows modern best practices for serverless development.

## Key Features

- **Responsive UI**: The project includes a user-friendly and responsive user interface that allows users to enter text and upload files seamlessly.

- **Serverless Architecture**: Leveraging AWS Lambda, API Gateway, S3, and DynamoDB, the project implements a serverless architecture that scales automatically and eliminates the need for managing servers.

- **Secure File Uploads**: The architecture securely handles the upload of files to AWS S3, ensuring the confidentiality and integrity of the uploaded data.

- **Data Persistence**: The project uses AWS DynamoDB to store records related to the uploaded files, providing reliable and scalable data persistence.

- **AWS CDK Integration**: The serverless architecture is defined and deployed using AWS Cloud Development Kit (CDK), enabling infrastructure-as-code and easy management of AWS resources.

- **Security and Access Control**: AWS Identity and Access Management (IAM) is utilized to ensure secure access to AWS resources, protecting against unauthorized access and providing fine-grained access control.

## Deployment

To deploy the AWS Serverless File Uploader project, follow the steps below:

1. Clone the repository: `git clone https://github.com/your-username/aws-serverless-file-uploader.git`

2. Install dependencies: `cd aws-serverless-file-uploader && npm install`

3. Configure AWS credentials: Ensure you have AWS credentials configured on your local machine, either by using AWS CLI or environment variables.

4. Build the React application: `npm run build`

5. Deploy the infrastructure using AWS CDK: `cdk deploy`

6. Access the deployed application: After a successful deployment, the URL for the deployed application will be provided. Visit the URL in a web browser to access the AWS Serverless File Uploader.

