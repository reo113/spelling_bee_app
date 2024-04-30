const express = require("express");

const auth = require("./auth/auth.routes");
const user = require("./user/user.routes");
const definition = require("./definition/definition.routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API v1",
  });
});

router.use("/auth", auth);
router.use("/user", user);
router.use("/definition", definition);

module.exports = router;
