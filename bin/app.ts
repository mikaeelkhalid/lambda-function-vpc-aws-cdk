#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { LambdaFunctionVpcStack } from '../lib/lambda-function-vpc-stack';

const app = new App();
new LambdaFunctionVpcStack(app, 'LambdaFunctionVpcStack', {});