const express = require("express");
const auth = require("./auth/auth.routes");
const user = require("./user/user.routes");
const definition = require("./definition/definition.routes");
const audio = require("./audio/audio.routes");
const sentence = require("./sentence/sentence.routes");
const response = require("./response/response.routes");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API v1",
  });
});

router.use("/auth", auth);
router.use("/user", user);
router.use("/definition", definition);
router.use("/audio", audio);
router.use("/sentence", sentence);
router.use("/response", response);
module.exports = router;
