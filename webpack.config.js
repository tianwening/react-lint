const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
    return {
        mode:
            process.env.NODE_ENV === 'development'
                ? 'development'
                : 'production',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: [/node_modules/],
                    use: ['babel-loader', 'ts-loader'],
                },
            ],
        },
        devServer: {
            host: 'localhost',
            port: 3000,
            hot: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
    }
}
