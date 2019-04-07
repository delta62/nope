const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    background: './src/background.ts',
    devtools: './src/devtools.ts',
    panel: './src/panel.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json' ]
  },
  devtool: 'source-map'
}
