//sample_cdk.ts
import "source-map-support/register";
import cdk = require("@aws-cdk/core");
import { VpcStack } from "../lib/vpc-stack";
import { RDSStack } from "../lib/db-stack";

const AWS_ACCOUNT = "502612239066";
const AWS_REGION = "eu-central-1";

const app = new cdk.App();
const vpcStackEntity = new VpcStack(app, "VpcStack", {
  env: { account: AWS_ACCOUNT, region: AWS_REGION },
});
new RDSStack(app, "RDSStack", {
  vpc: vpcStackEntity.vpc,
  env: { account: AWS_ACCOUNT, region: AWS_REGION },
});
app.synth();
