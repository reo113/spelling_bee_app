const express = require("express");
const _ = require("lodash");

const { db } = require("../../utils/db");
const { checkRateLimit } = require("../../utils/throttle");
const { fetchAudioFromWordnik } = require("../../utils/fetchAudio");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Fetching words and audio...");
  const { userId, type } = req.body;
  try {
    let wordsWithAudio = await db.dictionary.findMany({
      take: 100,
      where: { audio: { not: null } },
      select: { word: true, audio: true, id: true },
    });
    // Shuffle the words and pick a number for the game
    wordsWithAudio = _.shuffle(wordsWithAudio);
    const wordPool = wordsWithAudio.slice(0, 5);

    if (userId) {
      const result = await db.$transaction(async (prisma) => {
        const newGame = await prisma.game.create({
          data: {
            userId: userId,
            type: type,
          },
        });
        const questions = [];

        const updatedResult = await Promise.all(
          wordPool.map(async (word) => {
            await checkRateLimit(); // Throttle requests
            const audioUrl = await fetchAudioFromWordnik(word.word);
            const question = await prisma.question.create({
              data: {
                gameId: newGame.id,
                questionText: word.word,
                correctAnswer: word.word,
                choices: {
                  create: { choice: word.word },
                },
              },
            });
            questions.push({
              id: question.id,
              answer: word,
              audio: audioUrl,
            });
          }),
        );
        return questions;
      });
      res.json(result);
    } else {
      const updatedQuestions = await Promise.all(
        wordPool.map(async (word) => {
          await checkRateLimit(); // Throttle requests
          const audioUrl = await fetchAudioFromWordnik(word.word);
          return {
            answer: word,
            audio: audioUrl,
          };
        }),
      );
      res.json(updatedQuestions);
    }
  } catch (error) {
    console.error("Error fetching words and audio:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
