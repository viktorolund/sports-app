/* eslint-disable no-console */
import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import history from "connect-history-api-fallback";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(history());

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
  if (err) throw err;

  open(`http://localhost:${port}`);
});
