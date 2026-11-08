var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// routes live inside app_server now so these paths had to change..
var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
// pulling in hbs directly so I can register my partials folder below.
var handlebars = require("hbs");

var app = express();

// view engine setup pointing express at the views folder inside app_server
app.set("views", path.join(__dirname, "app_server", "views"));

// registers handlebars partials https://www.npmjs.com/package/hbs this is what lets {{> header }} and {{> footer }} find their files
handlebars.registerPartials(__dirname + "/app_server/views/partials");

app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// wiring the /travel url to the travel router which will then hand it off to the travel controller.
app.use("/travel", travelRouter);

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

module.exports = app;
