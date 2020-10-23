"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.Promise = global.Promise;

const dotenv = require("dotenv");
dotenv.config();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());

const BookmarksRouter = require("./routes/bookmarks.route");
const TagsRouter = require("./routes/tags.route");

var port = process.env.PORT || 4000;
var url = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

app.use("/api/bookmarks", BookmarksRouter);
app.use("/api/tags", TagsRouter);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
