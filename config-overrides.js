const {
    useBabelRc,
    override,
    addWebpackPlugin,
    useEslintRc,
} = require('customize-cra');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = override(
    useBabelRc(),
    useEslintRc(),
    addWebpackPlugin(
        new CircularDependencyPlugin({
            exclude: /\.js|node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        })
    )
);
