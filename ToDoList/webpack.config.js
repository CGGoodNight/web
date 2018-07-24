const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlplugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),   //__dirname指向的是当前项目的根目录
	filename: 'index.html'
})

module.exports = { 
    mode:"development",
    plugins: [
        htmlplugin
    ],
    module: {
        rules: [	//第三方匹配规则
            { test:/\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },

            { test: /\.css$/, use: ['style-loader', 'css-loader'] },

            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader']}   //打包处理scss文件的loader
        ]	
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],  //表示这几个文件的后缀名引入时可以不写后缀名
        alias: {    //表示别名
            '@': path.join(__dirname, './src')		//这样，@就表示项目根目录中src路径（绝对路径）
        }
    }
}