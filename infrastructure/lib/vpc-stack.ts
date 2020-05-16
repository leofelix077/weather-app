import { App, Stack, StackProps } from "@aws-cdk/core";
import { Peer, Port, SecurityGroup, SubnetType, Vpc } from "@aws-cdk/aws-ec2";
import { getEnvironment } from "./get-environment";
import { Environment } from "../constants/environment";

export class VpcStack extends Stack {
  readonly vpc: Vpc;
  readonly ingressSecurityGroup: SecurityGroup;
  readonly egressSecurityGroup: SecurityGroup;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const environment = getEnvironment();

    this.vpc = new Vpc(this, "NothingVPC", {
      cidr: "10.0.0.0/16",
      maxAzs: environment === Environment.Development ? 2 : 3,
      subnetConfiguration: [
        {
          cidrMask: 26,
          name: "isolatedSubnet",
          subnetType: SubnetType.ISOLATED,
        },
      ],
      natGateways: 0,
    });

    this.ingressSecurityGroup = new SecurityGroup(
      this,
      "ingress-security-group",
      {
        vpc: this.vpc,
        allowAllOutbound: false,
        securityGroupName: "IngressSecurityGroup",
      }
    );
    this.ingressSecurityGroup.addIngressRule(
      Peer.ipv4("10.0.0.0/16"),
      Port.tcp(3306)
    );

    this.egressSecurityGroup = new SecurityGroup(
      this,
      "egress-security-group",
      {
        vpc: this.vpc,
        allowAllOutbound: false,
        securityGroupName: "EgressSecurityGroup",
      }
    );
    this.egressSecurityGroup.addEgressRule(Peer.anyIpv4(), Port.tcp(80));
  }
}
