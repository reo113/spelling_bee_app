const { db } = require("../../utils/db");

function findGamesByUserId(id) {
  return db.game.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

function getGameDataById(id) {
  return db.question.findMany({
    where: {
      gameId: id,
    },
    include: {
      choices: true,
      responses: true,
    },
  });
}

module.exports = {
  findGamesByUserId,
  getGameDataById,
};
