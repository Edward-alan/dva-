{
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: ['es2015']
    },
    include: [resolve('src'), resolve('test')]
}