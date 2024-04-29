const express = require("express");
const auth = require("./auth/auth.routes");
const definition = require("./definition/definition.routes");
const audio = require("./audio/audio.routes");
const sentence = require("./sentence/sentence.routes");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋",
  });
});

router.use("/auth", auth);
router.use("/definition", definition);
router.use("/audio", audio);
router.use("/sentence", sentence);

module.exports = router;
