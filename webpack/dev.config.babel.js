import webpack from 'webpack';

import { HTML, JS, STYL } from './rules';
import { htmlPlugin } from './plugins';

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: 'src',
        port: 3014,
        historyApiFallback: true,
        publicPath: '/',
    },

    entry: "./src/index.js",
    module: {
        rules: [HTML, JS, STYL]
    },
    plugins: [htmlPlugin]
};