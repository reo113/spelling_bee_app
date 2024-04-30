const { findUserById } = require("../api/user/user.services");

// const jwt = require("jsonwebtoken");

// function isAuthenticated(req, res, next) {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     res.status(401);
//     throw new Error("Unauthorized");
//   }

//   try {
//     const token = authorization.split(" ")[1];
//     const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
//     req.payload = payload;
//   } catch (err) {
//     res.status(401);
//     if (err.name === "TokenExpiredError") {
//       throw new Error(err.name);
//     }
//     throw new Error("Unauthorized");
//   }

//   return next();
// }

// module.exports = isAuthenticated;

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
