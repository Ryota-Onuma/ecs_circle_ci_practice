const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, './dist'),
    // 出力ファイル名
    filename: 'bundle.js',
    publicPath: 'http://localhost:3500/'
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 3500
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 5000 // 5秒ごとにファイルの更新を確認
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // ファイルが.vueで終われば...
        loader: 'vue-loader' // vue-loaderを使う
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader']
      },
      {
        test: /\.(ico|svg|jpe?g|png|webp)$/,
        type: 'asset/resource'
      }
    ]
  },
  target: ['web', 'es5'],
  resolve: {
    // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
    extensions: ['.js', '.vue'],
    alias: {
      // vue-template-compilerに読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()]
};
