import * as cdk from 'aws-cdk-lib';
import {aws_s3 as s3 } from 'aws-cdk-lib'
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
     new s3.Bucket(this,'MyFirsrtBucket', {
        versioned: true,
        bucketName: 'tarang-cdk-bucket-two'
     });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'FirstAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
