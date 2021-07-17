var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var dotenv = require("dotenv");

dotenv.config({ path: "./.env.local" });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var messageRouter = require("./routes/message");
var authRouter = require("./routes/auth");

var app = express();

app.use(upload.array());

app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/build")));

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);
mongoose.connection.on("connected", () => {  
  console.log("Connected to Socket-chat db");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/message", messageRouter);
app.use("/api/auth", authRouter);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
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

module.exports = app;
