module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
    loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass!sass-resources'
        },
        {
            test: /bootstrap\/dist\/js\/umd\//,
            loader: 'imports?jQuery=jquery'
        },
        { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
        { test: /\.(ttf|eot)$/, loader: 'file' }
    ],
  }
};
