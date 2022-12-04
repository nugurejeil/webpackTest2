const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [ // 여기서 로더를 추가할 수 있습니다.
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 여기 추가합니다.
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/inline',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 80 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                //     }
                // },
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '배너입니다!!'
        })
    ]
};
