const express = require("express");
const bcrypt = require("bcryptjs");
const {
  findUserByEmail,
  createUserByEmailAndPassword,
  findUserById,
} = require("../user/user.services");

const router = express.Router();

router.get("/currentUser", async (req, res) => {
  const userId = req.session.userId;

  if (userId) {
    const user = await findUserById(userId);

    if (!user) {
      return res.json({ message: "User doesn't exist." });
    }

    return res.json({
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } else {
    return res.json({ user: null });
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("You must provide an email and a password.");
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    res.status(400);
    throw new Error("Email already in use.");
  }

  try {
    const user = await createUserByEmailAndPassword({ email, password });

    req.session.userId = user.id;

    res.json({
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error occurred while creating user.",
      error: err,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("You must provide an email and a password.");
    }

    const existingUser = await findUserByEmail(email);

    if (!existingUser) {
      res.status(403);
      throw new Error("Invalid login credentials.");
    }

    // const validPassword = await bcrypt.compare(password, existingUser.password);

    bcrypt.compare(password, existingUser.password, (error, result) => {
      if (result) {
        req.session.userId = existingUser.id;

        res.json({
          message: "Logged in successfully.",
          user: {
            id: existingUser.id,
            email: existingUser.email,
          },
        });
      } else {
        res.status(403).json({ message: "Invalid login credentials." });
      }
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred during the login process." });
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

module.exports = router;
