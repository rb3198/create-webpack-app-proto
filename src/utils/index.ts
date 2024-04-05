import chalk = require("chalk");
import * as fs from "fs";

export const getParsedTargetJson = (pathToPkgJson: string) => {
  const strJson = fs.readFileSync(pathToPkgJson).toString();
  return JSON.parse(strJson);
};

export const rollback = (
  projectDir: string,
  resolve: (param: any) => void,
  errMessage?: string
) => {
  if (errMessage) {
    console.error(chalk.red(errMessage));
  }
  // rollback all changes.
  fs.rmSync(projectDir, { recursive: true, force: true });
  return resolve({ success: false });
};
