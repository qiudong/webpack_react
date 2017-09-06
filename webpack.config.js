var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: "./app/static/js/index.js",
    output: {
        path: __dirname + "/build/",
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)?$/,
                loader: "babel-loader",
                query: {
                    "presets": ['react', 'es2015','stage-0']
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
