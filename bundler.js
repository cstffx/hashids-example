const webpack = require("webpack");

module.exports = {
    webpack: {
        extensions: {
            express: {
                typescript: [".ts", ".tsx", ".js"]
            }
        },
        rules: {
            // Add ts-loader to proccess ts files
            // See https://github.com/TypeStrong/ts-loader
            typescript: {test: /\.tsx?$/, loader: "ts-loader"}
        },
        plugins: {
            typescript: {
                // Ignore changes in this files to avoid infinity loop.
                // See https://github.com/TypeStrong/ts-loader
                watch: new webpack.WatchIgnorePlugin([
                    /\.js$/,
                    /\.d\.ts$/
                ])
            }
        }
    }
};