"use strict";

let express = require("express"),
  app = express(),
  path = require("path"),
  port = process.env.PORT || 5000,
  bodyParser = require("body-parser"),
  routes = require("./app/router");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set("port", port);

app.engine("html", require("ejs").renderFile);

// use dist as app root
app.use("/", express.static(path.join(__dirname + "/../dist")));

const newsFromDB = require("./app/news-from-db");

io.on("connection", socket => {
  console.log(`user connected`);

  socket.emit("latest news", newsFromDB);

  io.on("disconnect", reason => {
    console.log(reason);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register routes
app.use("/api", routes);

app.use(function(req, res, next) {
  //return res.status(404).send("Not found");
  // res.status(404).render(__dirname + "/app/error-404.html");
});

server.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
// app.listen(app.get("port"), function() {
//   console.log("Node app is running on port", app.get("port"));
// });
