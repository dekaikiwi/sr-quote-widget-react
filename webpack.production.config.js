var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sr-comment-widget.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        vendors: ['react']
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
                exclude: [node_modules_dir]
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}