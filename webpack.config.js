const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
    mode: 'development', //"production" | "development" | "none"
    entry: './src/index.tsx', //入口文件
    output: {
        filename: 'bundle.[hash].js', //文件名
        path: path.resolve(__dirname, '/dist'), //输出文件路径(绝对路径)
        sourceMapFilename: '[name].js.map',
        publicPath: '/',
    },
    devtool: 'source-map',
    module: {
        //模块配置
        rules: [
            //模块规则
            //编译ts、tsx文件
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                //配置antd组件库按需加载
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                style: 'css',
                            }),
                        ],
                    }),
                },
                exclude: /node_modules/,
            },
            //这几个都是css,loader
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            //这个file-loader，暂时不用就去掉吧
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
    devServer: {
        inline: true, //默认情况下，应用程序启用内联模式(inline mode)。这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
        open: true, //告诉 dev-server 在 server 启动后打开浏览器
        hot: true, //启动热更新
        overlay: {
            //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            errors: true,
        },
        historyApiFallback: true, //任意的 404 响应都可能需要被替代为 index.html
        //跨域处理
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1',
                secure: false,
                changeOrigin: true,
            },
        },
    },
    //路径映射，让我们跨文件夹导入资源更方便简洁，ts项目需要配置两处：tsconfig.json路径映射以及webpack
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '@component': path.resolve(__dirname, './src/component'),
            '@page': path.resolve(__dirname, './src/page'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@api': path.resolve(__dirname, './src/api'),

        },
    },
    plugins: [
        //插件配置
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
            appMountId: 'app',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
        }),
    ],
};
