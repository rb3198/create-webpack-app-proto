import { IWebpackConfig } from "./IWebpackConfig";

export type WebpackConfigBuilder = {
  requires: Record<string, string>;
  config: IWebpackConfig;
};
