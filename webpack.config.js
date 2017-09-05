var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: __dirname+"/app/",
    entry: "./static/js/index.js",
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

            },
            {test: /\.(png|jpg|svg|gif)$/, loader: 'url-loader?limit=25000&name=public/[name][hash:8].[ext]'},//指定图片路径

        ]

    }
}
