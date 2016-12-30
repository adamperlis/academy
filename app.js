const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.babel.js')
  const compiler = webpack(config)
  console.log(config.default.output.publicPath, "=======")
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: "/"  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)