let path    = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
       // see http://stackoverflow.com/questions/31073032/firebase-library-for-node-js-breaks-when-using-babel-loader-specifically-un
       { test: /\.js$/, 
         exclude: [/app\/lib/, /node_modules/],
        // exclude: /node_modules\/(?!(firebase|angularfire)\/).*/,

        //  include: [
        //   path.resolve(__dirname, "client"),
        //   path.resolve(__dirname, "node_modules/angularfire"),
        //   path.resolve(__dirname, "node_modules/firebase")],
         loader: 'ng-annotate!babel' },
      //  { test: /\.js$/, include: ['angularfire', 'firebase'], loader: 'file-loader' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
       { test: /\.css$/, loader: 'style!css' },
       { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    alias: {
      constants: path.join(__dirname, 'client/app/constants'),
    }
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    new webpack.ProvidePlugin({
      _: 'lodash'
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
