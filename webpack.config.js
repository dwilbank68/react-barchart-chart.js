module.exports = {
    entry: './source/client.jsx',
    output: {
        path:'./',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.csv$/,
                loader: 'dsv'
            }
        ]
    }
}