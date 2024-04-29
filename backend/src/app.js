const express = require("express");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middleware");
const api = require("./api");

const corsOptions = {
  origin: "http://localhost:5173",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    message: "API",
  });
});

app.use(middlewares.log);

app.use("/api/v1", api);

module.exports = app;
