const path = require('path')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    background: './background.ts',
    devtools: './devtools.ts',
    panel: './panel.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: [ '.js', '.json', '.html', '.ts', 'tsx' ]
  },
  devtool: 'source-map'
}
