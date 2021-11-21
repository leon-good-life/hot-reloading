const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");

const compiler = Webpack(webpackConfig);

const devServerOptions = {
  hot: true,
  host: 'localhost'
};

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(5000, 'localhost', err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening at http://localhost:5000/`);
    }
});
