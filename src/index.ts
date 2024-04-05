import { Command } from "commander";
import * as chalk from "chalk";
import * as packageJson from "../package.json";
import { Project } from "./project";

const project = Project();
const program = new Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")} [options]`)
  .action((dir) => {
    project.projectDirectory(dir);
  })
  .option(
    "-t, --template <template>",
    "Specify the template to be implemented."
  )
  .option("-o, --options <options...>", "Options to configure the template.")
  .option(
    "-pv, --projectVersion <version>",
    "Version number to initialize the project with."
  )
  .parse(process.argv);

const opts = program.opts();
const { template, options, projectVersion } = opts;
project.options(options);
project.template(template);
project.version(projectVersion);
project().then((result) => {
  if (result) {
    console.log(
      chalk.greenBright(
        `Successfully initialized a new webpack-based project ${program.args[0]}.`
      )
    );
  }
});
