var path = require('path');

module.exports ={
    context:path.resolve("src"), //create relative root directory fot the 'entry'
    entry:["./vendor/vendor.js","./app.js"],
    output:{
        path:"dist/scripts",
        publicPath:"scripts",  //tel the web server to lookup the bundle.js(index.html path to bundle)
        filename:"bundle.js"
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
                test:/\.es6$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            }
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