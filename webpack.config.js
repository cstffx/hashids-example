const path = require("path");
const __sourcedir = path.join(__dirname, "./src");
const {webpack} = require("./bundler");

module.exports = {
    entry: path.join(__sourcedir, "index.ts"),
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: webpack.extensions.express.typescript
    },
    module: {
        // Add js and ts files using ts-loader
        rules: [webpack.rules.typescript]
    },
    plugins: [
        webpack.plugins.typescript.watch
    ]
};

