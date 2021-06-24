var createError = require("http-errors");
var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var productsRouter = require("./routes/api/products");
var config = require("config");
var app = express();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, "firstreact/build")));
// Anything that doesn't match the above, send back index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
// });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use(express.static(path.join(__dirname, "/firstreact/build")));
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/AllProducts/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/Shoes/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/Watches/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/Bags/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/Accessories/:page", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/Women/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/Men/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/home/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/Shop", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/addnew", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/update/:id", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/features", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/blog/BlogWinter-to-SpringFashion", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/blog/BlogGreatBigList", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/blog/BlogInspiringWays", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/Not-Found", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});
app.get("/:page?", function (req, res) {
  res.sendFile(path.join(__dirname + "/firstreact/build/index.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));
module.exports = app;
