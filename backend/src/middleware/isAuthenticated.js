const { findUserById } = require("../api/user/user.services");

const isAuthenticated = async (req, res, next) => {
  try {
    const { userId } = req.session;
    if (userId) {
      const user = await findUserById(userId);

      if (user) {
        req.user = user;
      } else {
        res.status(401).json({ message: "Invalid session." });
      }
    } else {
      res.status(401).json({ message: "Unauthorized." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }

  return next();
};

module.exports = isAuthenticated;
