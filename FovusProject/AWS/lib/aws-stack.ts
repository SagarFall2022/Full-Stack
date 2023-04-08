import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as dynamodb from '@aws-cdk/aws-dynamodb';


export class AwsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketName = "sagar1998";
    const existingBucket = s3.Bucket.fromBucketName(this, 'MyBucket', bucketName);
    
    let bucket;
    if (existingBucket.bucketName === bucketName) {
      bucket = existingBucket;
    } else {
      bucket = new s3.Bucket(this, "MyBucket", {
        bucketName: "sagar1998",
      });
    }


    const table = new dynamodb.Table(this, 'MyTable', {
      tableName: 'fovus', 
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Delete the table when the stack is deleted
    });
   


  }
}
export default AwsStack;