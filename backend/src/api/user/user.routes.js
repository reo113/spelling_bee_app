const express = require("express");
const { isAuthenticated } = require("../../middleware");
const { findUserById } = require("./user.services");

const router = express.Router();

router.get("/profile", isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await findUserById(userId);
    delete user.password;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
