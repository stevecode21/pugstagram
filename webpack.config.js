// Call to path to identify a value
const path = require('path')
// Import the html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Create the object to configure my webpack file
module.exports = {
    // main file of my webapp
    entry: './src/index.js',
    // Where to save the information before to compile or go to production
    output: {
        // Use path to locate the path on dist (distribution)
        path: path.resolve(__dirname, 'dist'),
        // Compilation's name
        fileName: 'bundle.js'
    },
    // Extensions resolve
    resolve: {
        // Array of extensions
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    // Settings and rules of my project
    module: {
        // Array of rules, to detect loaders or working with my loaders
        rules: [
            // First rule to working with babel loader
            {
                // RegExp
                test: /\.js?$/,
                // Exclude node_modules
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            // Another rules to work with Svelte
            {
                test: /\.svelte?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    // Add installed plugins
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}