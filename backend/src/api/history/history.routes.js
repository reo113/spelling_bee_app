const express = require("express");
const { isAuthenticated } = require("../../middleware");
const { findUserById } = require("../user/user.services");
const { findGamesByUserId, getGameDataById } = require("./history.services");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userId = req.session.userId;

    if (userId) {
      const user = await findUserById(userId);

      if (!user) {
        return res.status(404).json({ message: "User doesn't exist." });
      }

      const games = await findGamesByUserId(userId);

      res.json(games);
    } else {
      return res
        .status(500)
        .json({ message: "Error getting games: no user Id provided." });
    }
  } catch (err) {
    console.error(err);
    res.json({
      message: "Error occurred while getting games for user.",
      error: err,
    });
  }
});

router.get("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;

    if (gameId) {
      const questions = await getGameDataById(gameId);

      res.json(questions);
    } else {
      return res
        .status(500)
        .json({ message: "Error getting questions for game." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error occurred while getting questions for game.",
      error: err,
    });
  }
});

module.exports = router;
