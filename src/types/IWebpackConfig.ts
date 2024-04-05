import { IConfigRule } from "./IConfigRule";

export interface IWebpackConfig {
  entry: string;
  //   only a sample, can be implemented in detail, extensively.
  output: { path: string } | ((pathData: string, assetInfo: string) => string);
  plugins: string[];
  module: {
    rules: IConfigRule[];
  };
}
