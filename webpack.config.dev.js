import path from 'path'
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {

  	preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "client"),
        ],
      }
    ],
    
    loaders: [
      //JS
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client')
          //path.join(__dirname, 'server/shared')
        ],
        loaders: [ 'react-hot', 'babel' ]
      },
      //CSS
      {
        test:   /\.css$/,
        include: [
          path.resolve(__dirname, "client"),
        ],
        loader: "style-loader!css-loader!postcss-loader"
      }

    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}
