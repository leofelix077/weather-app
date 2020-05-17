import { Environment } from "../constants/environment";

export const getEnvironment = (): Environment => {
  return (
    (process.env.CDK_ENVIRONMENT as Environment) || Environment.Development
  );
};
