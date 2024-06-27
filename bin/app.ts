#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { LambdaFunctionVpcStack } from '../lib/lambda-function-vpc-stack';

const app = new App();

new LambdaFunctionVpcStack(app, 'lambda-function-vpc-stack', {
    stackName: 'lambda-function-vpc-stack',
    env: {
        account: 'xxxxxxxxx', // change before deploy
        region: 'xxxxxxxxx'  // change before deploy
    }
});