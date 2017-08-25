"use strict";

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const routes = require("./app/router");
const logger = require("./Logger");

const server = require("http").createServer(app);
const io = require("socket.io")(server);
const newsFromDB = require("./app/news-from-db");

logger.info("Server starting...");
logger.debug("debugger server");
app.set("port", port);

app.engine("html", require("ejs").renderFile);

app.use("/", express.static(path.join(__dirname + "/../dist")));
app.use("/api", routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

io.on("connection", socket => {
  console.log(`user connected`);

  socket.emit("latest news", newsFromDB);

  io.on("disconnect", reason => {
    console.log(reason);
  });
});

server.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
// app.listen(app.get("port"), function() {
//   console.log("Node app is running on port", app.get("port"));
// });
