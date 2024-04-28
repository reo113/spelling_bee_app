const express = require("express");

const auth = require("./auth/auth.routes");
const definition = require("./definition/definition.routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋",
  });
});

router.use("/auth", auth);
router.use("/definition", definition);

module.exports = router;
