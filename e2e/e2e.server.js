const webpack = require("../webpack.prod");
const WebpackDevServer = require("../webpack.dev");
const config = require("../webpack.dev");

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, "localhost", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  if (process.send) {
    process.send("ok");
  }
});
