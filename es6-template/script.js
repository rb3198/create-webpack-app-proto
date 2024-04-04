// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const commander = require("commander");
const packageJson = require("./package.json");
const targetPackageJson = require("./target_package.json");
const chalk = require("chalk");
const fs = require("fs");
const prettier = require("prettier");

// const isProduction = process.env.NODE_ENV == "production";

const requires = { path: "path" };
const config = {
  entry: "./src/index.js",
  output: {
    path: '$code{path.resolve(__dirname, "dist")}',
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: "$code{/.(js|jsx)$/i}",
        exclude: "$code{/node_modules/}",
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: "$code{/.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i}",
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

const program = new commander.Command(packageJson.name)
  .option("-o, --options <options...>", "Options to configure the template")
  .parse(process.argv);

const opts = program.opts();
const { options } = opts || {};
if (options && options.length > 0) {
  options.forEach((option) => {
    const [key, value] = option.split("=") || [];
    const parsedValue =
      typeof value === "undefined" || value === "true"
        ? true
        : value === "false"
          ? false
          : value;
    switch (key) {
      case "simplifyHtml":
        if (!parsedValue) {
          break;
        }
        config.plugins.push(
          '$code{new HtmlWebpackPlugin({ template: "index.html", })}'
        );
        requires.HtmlWebpackPlugin = "html-webpack-plugin";
        targetPackageJson.devDependencies["html-webpack-plugin"] = "^5.6.0";
        break;
      case "wds":
        if (!parsedValue) {
          break;
        }
        targetPackageJson.devDependencies["webpack-dev-server"] = "^5.0.4";
        targetPackageJson.devDependencies["webpack-cli"] = "^5.1.4";
        targetPackageJson.scripts.start = "webpack-dev-server --open";
        break;
      default:
        console.warn(
          chalk.yellow(
            `Unknown configuration option ${key} passed to the template`
          )
        );
        break;
    }
  });
}

prettier
  .format(JSON.stringify(targetPackageJson), { parser: "json" })
  .then((formattedJson) => {
    fs.writeFileSync(path.resolve(".", "target_package.json"), formattedJson);
  });

const writeToFile = {
  requires,
  config,
};

fs.writeFileSync(
  path.resolve(".", "webpack.config.helper.json"),
  JSON.stringify(writeToFile)
);
