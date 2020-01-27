const path = require('path');


module.exports = {
    // What file should be taken as the entry?
    entry: './src/app.js',
    // Where should be the output file and how is it named?
    output: {
        path: path.join(__dirname, 'public'), 
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                // Watch for all files inside the app which end with js and run babel through them
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                // Watch for all scss-files or css-files and load them through the loaders
                test: /\.s?css$/,
                use: [
                    'style-loader', // Inject a style-tag 
                    'css-loader',   // Compile css
                    'sass-loader'   // Convert scss into css
                ] 
            }
        ]
    },
    // Source Maps
    devtool: 'cheap-module-eval-source-map',
    // Dev Server
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};