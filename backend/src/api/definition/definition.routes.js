const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");
const router = express.Router();


router.post("/", async (req, res) => {

  const { userId, type } = req.body;
  try {
    let wordsWithDefinitions = await db.dictionary.findMany({
      take: 20000,
      select: { word: true, definition: true },
    });
    // split the words into correct and incorrect answers
    wordsWithDefinitions = _.shuffle(wordsWithDefinitions);
    const correctAnswers = wordsWithDefinitions.slice(0, 10);
    let incorrectPool = wordsWithDefinitions.slice(10);

    if (userId) {
      const result = await db.$transaction(async (prisma) => {
        const newGame = await prisma.game.create({
          data: {
            userId: userId,
            type: type
          }
        });

        const questions = [];

        for (const word of correctAnswers) {
          const shuffledIncorrect = _.sampleSize(incorrectPool, 2);
          incorrectPool = _.difference(incorrectPool, shuffledIncorrect);

          const question = await prisma.question.create({
            data: {
              gameId: newGame.id,
              questionText: word.definition,
              correctAnswer: word.word,
              AnswerChoice: {
                create: [
                  { choice: word.word },
                  { choice: shuffledIncorrect[0].word },
                  { choice: shuffledIncorrect[1].word }
                ]
              }
            }
          });

          questions.push({
            id: question.id,
            answer: word,
            words: _.shuffle([word.word, shuffledIncorrect[0].word, shuffledIncorrect[1].word]),
          });
        }

        return questions;
      });
      res.json(result);
    } else {
      // If no valid userId, just return the shuffled words without creating game data
      const questions = correctAnswers.map(word => {
        const shuffledIncorrect = _.sampleSize(incorrectPool, 2);
        incorrectPool = _.difference(incorrectPool, shuffledIncorrect);
        return {
          answer: word,
          words: _.shuffle([word.word, shuffledIncorrect[0].word, shuffledIncorrect[1].word]),
        };
      });

      res.json(questions);
    }
  } catch (error) {
    console.error("Error fetching words and definitions:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;