module.exports = {
    entry: "./app/components/SamiZ.js",
    output: {
        filename: "public/bundle.js",
    },
    
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ],
        
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};