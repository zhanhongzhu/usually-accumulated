const path = require('path')
const resolve = (dir) => path.resolve(__dirname,dir)
/**
 * 简单配置这个webpack 编译就行
 */
module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath:'temp/'
    },
    resolve: {
        extensions: [".ts",".js"],     // 自动补全，很重要
        alias:{
            'API': resolve('./jsAPI'),
            'TS': resolve('./ts'),
            'CSS': resolve('./css'),
        }
    },
    module: {
        rules:[{
                test: /.\js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'//时刻记住webpack是从右向左解析的 所以是less->css->style
            },
            //ts
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
          ]
    },
    plugins: [
        
    ],
    devServer:{
        contentBase:path.join(__dirname),
        compress:true,
        inline:true,
        host:'127.0.0.1',
        port:8888,
        open: true
    },
    mode:"development"
}