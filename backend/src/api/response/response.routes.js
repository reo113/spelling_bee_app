const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { response, questionId, userId, isCorrect } = req.body;
  try {
    const newResponse = await db.response.create({
      data: {
        response,
        questionId,
        userId,
        isCorrect,
      },
    });
    res.json(newResponse);
  } catch (error) {
    if (error.code === "P2003") {
      return res
        .status(400)
        .send("Foreign key constraint failed. Check the validity of the IDs.");
    }
    console.error("Error creating Response:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
