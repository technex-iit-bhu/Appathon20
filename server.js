var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var helmet = require("helmet");
var cors = require("cors");
var path = require("path");
var isEmpty = require("./validation/is-empty");

var secret = require("./config/secret");

mongoose
  .connect(secret.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
var app = express();
//middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
require("./config/passport-jwt")(passport);
app.use(cors());
// routes
app.get("/server-stats", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.send("production");
  } else {
    res.send("dev");
  }
});
var userRegister = require("./routes/api/user");
app.use("/api", userRegister);
var portfolioroute = require("./routes/api/portfolio");
app.use("/api/portfolio", portfolioroute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, function(err) {
  if (err) throw err;
  console.log("server is running on port " + 5000);
});
