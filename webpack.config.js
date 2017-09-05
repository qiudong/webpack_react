var webpack = require('webpack')
var path = require('path')

module.exports = {

    entry: "./app/static/js/index.js",
    output: {
        path: __dirname + "/app/",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)?$/,
                loader: "babel-loader",
                query: {
                    "presets": ['react', 'es2015']
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.(scss||gscss)?$/,
                loader: ['style-loader','css-loader','sass-loader'],
                exclude: '/node_modules/'

            }
        ]

    }
}
