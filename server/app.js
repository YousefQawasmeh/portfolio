const express = require("express");
const app = express();
const router = require("./controllers");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use(router);
app.disable("x-powered-by");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

module.exports = app;
