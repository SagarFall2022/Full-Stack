"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsStack = void 0;
const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
const dynamodb = require("@aws-cdk/aws-dynamodb");
class AwsStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const bucketName = "sagar1998";
        const existingBucket = s3.Bucket.fromBucketName(this, 'MyBucket', bucketName);
        let bucket;
        if (existingBucket.bucketName === bucketName) {
            bucket = existingBucket;
        }
        else {
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
exports.AwsStack = AwsStack;
exports.default = AwsStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXdzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBR2xELE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3JDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDL0IsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU5RSxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksY0FBYyxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDNUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUN2QyxVQUFVLEVBQUUsV0FBVzthQUN4QixDQUFDLENBQUM7U0FDSjtRQUdELE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2hELFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ2pFLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSw2Q0FBNkM7U0FDeEYsQ0FBQyxDQUFDO0lBSUwsQ0FBQztDQUNGO0FBMUJELDRCQTBCQztBQUNELGtCQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0ICogYXMgczMgZnJvbSBcIkBhd3MtY2RrL2F3cy1zM1wiO1xuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSAnQGF3cy1jZGsvYXdzLWR5bmFtb2RiJztcblxuXG5leHBvcnQgY2xhc3MgQXdzU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IFwic2FnYXIxOTk4XCI7XG4gICAgY29uc3QgZXhpc3RpbmdCdWNrZXQgPSBzMy5CdWNrZXQuZnJvbUJ1Y2tldE5hbWUodGhpcywgJ015QnVja2V0JywgYnVja2V0TmFtZSk7XG4gICAgXG4gICAgbGV0IGJ1Y2tldDtcbiAgICBpZiAoZXhpc3RpbmdCdWNrZXQuYnVja2V0TmFtZSA9PT0gYnVja2V0TmFtZSkge1xuICAgICAgYnVja2V0ID0gZXhpc3RpbmdCdWNrZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJNeUJ1Y2tldFwiLCB7XG4gICAgICAgIGJ1Y2tldE5hbWU6IFwic2FnYXIxOTk4XCIsXG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsICdNeVRhYmxlJywge1xuICAgICAgdGFibGVOYW1lOiAnZm92dXMnLCBcbiAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiAnaWQnLCB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklORyB9LFxuICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSwgLy8gRGVsZXRlIHRoZSB0YWJsZSB3aGVuIHRoZSBzdGFjayBpcyBkZWxldGVkXG4gICAgfSk7XG4gICBcblxuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEF3c1N0YWNrOyJdfQ==