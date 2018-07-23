const path = require('path')

//two critical pieces of info:  entry -> output
//console.log(__dirname);

//export object to another file (webpack)
//node webpack.config.js gives absolute path

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};