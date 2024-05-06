const bcrypt = require("bcryptjs");
const { db } = require("../../utils/db");

function findUserById(id) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}

function findUserByEmail(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

function createUser(user) {
  user.password = bcrypt.hashSync(user.password, 12);
  return db.user.create({
    data: user,
  });
}

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
};
