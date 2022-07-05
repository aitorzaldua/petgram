// plugins instalados desde linea de comandos
const HtmlWebpackPlugin = require('html-webpack-plugin')

// indicar donde está el output de la compilación
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  // se trae el plugin a exports
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // para que use ultima version en todos los browsers
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development'
}
