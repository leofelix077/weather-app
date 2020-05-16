import { Environment } from "../constants/environment";

export const getEnvironment = () => {
  return process.env.CDK_ENVIRONMENT || Environment.Development;
};
