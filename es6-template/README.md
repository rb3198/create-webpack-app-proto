# Sample ES6 Template

This is a sample template to generate an ES6 based Webpack project in the prototype demonstration of my GSOC plan to resolve the `create-webpack-app` issue.<br>

1. The `template` directory includes files to be blindly copied in the output project.
2. The `script.js` file will be run on template installation by `create-webpack-app`, take in the options passed by the user, and output a final webpack config, which will be parsed by `create-webpack-app` to create the final webpack configuration file in the output project.

### Supported Options

Options can be passed to CLI arguments to configure webpack project accordingly.<br>

Example Usage: `node script.js --options <options>`
As this is only a sample template, the options supported right now are:

1. `wds` : If passed, it will inject `webpack-dev-server` as a dev dependency of the target project.
2. `simplifyHtml` : If passed, it will inject `HtmlWebpackPlugin` as a dev dependency of the target project, and add the plugin to the `plugins` field in the final webpack config.
