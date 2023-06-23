const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var session = require("express-session");
const cors = require("cors");
const sequelize = require("./config/keys");

require("dotenv").config();
// bring routes
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const integrations = require("./routes/integrations");

const app = express();

// store session data
const store = new SequelizeStore({
  db: sequelize,
});
app.use(
  session({
    secret: "wifihotspot",
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);
store.sync();
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: 1024 * 1024 * 10, type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 10, type: 'application/x-www-form-urlencoded' }));
app.use(cookieParser());

app.use(cors({ origin: "*" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  next();
});

// routes middleware
app.use(process.env.APIPATH + "/integrations", integrations);

const port = process.env.PORT || 3011;
const server = app.listen(port);


