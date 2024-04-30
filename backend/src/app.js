const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

require("dotenv").config();

const middlewares = require("./middleware");
const api = require("./api");

const corsOptions = {
  origin: "http://localhost:5173",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour
    },
  }),
);

app.get("/", (req, res) => {
  res.json({
    message: "API",
  });
});

app.use(middlewares.log);

app.use("/api/v1", api);

module.exports = app;
