import htmlWebPackPlugin from 'html-webpack-plugin';

export const htmlPlugin = new htmlWebPackPlugin({
    template: "./public/index.html", // entry
    filename: "./index.html", // output
});