const express = require("express");
const bcrypt = require("bcryptjs");
const { db } = require("../../utils/db");

const router = express.Router();

router.get("/current_user", async (req, res) => {
  if (req.session.userId) {
    const user = await db.user.findUnique({
      where: {
        id: req.session.userId,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    return res.status(200).json({ user });
  } else {
    return res.status(401).json({ user: null });
  }
});

router.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await db.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    req.session.userId = user.id;

    res.status(201).json({
      message: "User created!",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error occurred while creating user",
      error: err,
    });
  }
});

router.delete("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.sendStatus(500);
    }

    res.clearCookie("connect.sid");
    return res.sendStatus(200);
  });
});

router.post("/login", async (req, res) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Incorrect credentials",
      });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (passwordMatch) {
      req.session.userId = user.id;
      return res.status(200).json({
        message: "Logged in successfully",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({
        message: "Incorrect credentials",
      });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred during the login process" });
  }
});

module.exports = router;
