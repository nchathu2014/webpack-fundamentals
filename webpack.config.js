module.exports ={

    entry:["./src/vendor/vendor.js","./src/app.js"],
    output:{
        filename:"dist/bundle.js"
    },
    watch:true,
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

    resolve:{
        extensions:['','.js','.jsx','.es6']
    }
};