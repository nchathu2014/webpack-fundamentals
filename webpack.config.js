module.exports ={

    entry:["./src/vendor/vendor.js","./src/app.js"],
    output:{
        filename:"dist/bundle.js"
    },
    watch:true,
    module:{
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