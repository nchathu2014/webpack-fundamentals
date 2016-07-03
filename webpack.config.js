var path = require('path');

module.exports ={
    context:path.resolve("src"), //create relative root directory fot the 'entry'
    entry:{
        main:"./main.js"
    },
    output:{
        path:"dist",
        publicPath:"scripts",  //tel the web server to lookup the bundle.js(index.html path to bundle)
        filename:"[name]-bundle.js"
    },
    module:{

        preLoaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"jshint-loader"
            }
        ],
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
            {test:/\.css$/,exclude:/node_modules/,loader:"style-loader!css-loader"},
            {test:/\.scss$/,exclude:/node_modules/,loader:"style-loader!css-loader!autoprefixer-loader!sass-loader"},
            {test:/\.less$/,exclude:/node_modules/,loader:"style-loader!css-loader!autoprefixer-loader!less-loader"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {test:/\.(png|jpg)$/,exclude:/node_modules/,loader:"url-loader?limit=1000"}
        ]
    },

    devServer:{
      contentBase:"dist"
    },

    resolve:{
        extensions:['','.js','.jsx','.es6']
    },
    watch:true
};