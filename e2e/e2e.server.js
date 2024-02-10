import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, 'localhost', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});
