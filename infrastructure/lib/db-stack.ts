// ./lib/rds-stack.ts
import {
  App,
  Duration,
  Stack,
  StackProps,
  SecretValue,
  CfnOutput,
} from "@aws-cdk/core";
import {
  DatabaseInstance,
  DatabaseInstanceEngine,
  StorageType,
  DatabaseInstanceProps,
} from "@aws-cdk/aws-rds";
import { RetentionDays } from "@aws-cdk/aws-logs";
import { ISecret, Secret } from "@aws-cdk/aws-secretsmanager";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  Peer,
  SubnetType,
  Vpc,
  SecurityGroup,
  Port,
} from "@aws-cdk/aws-ec2";
import { getEnvironment } from "./get-environment";
import { Environment } from "../constants/environment";

export interface RDSStackProps extends StackProps {
  vpc: Vpc;
}

const DB_PORT = 17481;

export class RDSStack extends Stack {
  readonly secret: ISecret;
  readonly db: DatabaseInstance;

  constructor(scope: App, id: string, props: RDSStackProps) {
    super(scope, id, props);

    const environment = getEnvironment();

    this.db = new DatabaseInstance(this, "db", {
      masterUsername: "felix",
      masterUserPassword: SecretValue.ssmSecure(
        `db-master-pass-${environment}`,
        "2"
      ),
      engine: DatabaseInstanceEngine.POSTGRES,
      engineVersion: "11.4",
      storageType: StorageType.GP2,
      allocatedStorage: 20,
      port: DB_PORT,
      backupRetention: Duration.days(7),
      preferredBackupWindow: "01:00-02:00",
      preferredMaintenanceWindow: "Sun:02:01-Sun:03:01",
      enablePerformanceInsights: true,
      autoMinorVersionUpgrade: true,
      deletionProtection: true,
      monitoringInterval: Duration.seconds(60),
      cloudwatchLogsExports: ["postgresql", "upgrade"],
      cloudwatchLogsRetention: RetentionDays.ONE_YEAR,
      vpc: props.vpc,
      vpcPlacement: { subnetType: SubnetType.ISOLATED },
      // stage specific properties
      instanceClass: new InstanceType(
        environment === Environment.Production ? "t2.small" : "t2.micro" // Production must be at least "small" to enable encryption
      ),
      storageEncrypted: environment === Environment.Production,
      multiAz: environment === Environment.Production,
      databaseName: "nothing",
    });
  }
}
