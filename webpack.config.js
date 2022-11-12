module.exports = {
  target: 'webworker',
  entry: './index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: 'raw-loader',
      },
    ],
  }  
}