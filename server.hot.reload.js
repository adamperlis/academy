/* eslint-disable no-var, no-console */
import webpack            from 'webpack';
import WebpackDevServer   from 'webpack-dev-server';
import config             from './webpack.hot.reload.config.babel';

const port = (process.env.PORT || 3000);
new WebpackDevServer(
  webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }
).listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:${port}`);
});