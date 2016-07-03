var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports ={
    context:path.resolve("src"), //create relative root directory fot the 'entry'
    entry:{
        home:"./home.js",
        about:"./about.js",
        contact:"./contact.js"
    },
    output:{
        path:"dist",
        publicPath:"scripts",  //tel the web server to lookup the bundle.js(index.html path to bundle)
        filename:"[name].js"
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
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            }
        ]
    },
    plugins:[commonsPlugin],

    devServer:{
      contentBase:"dist"
    },

    resolve:{
        extensions:['','.js','.jsx','.es6']
    },
    watch:true
};