const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");

const router = express.Router();

function hideWordFromSentence(word, sentence) {
  return sentence.replace(word, "_____").trim();
}

router.post("/", async (req, res) => {
  const { userId, type } = req.body;
  try {
    let wordsWithExample = await db.dictionary.findMany({
      take: 100,
      where: { example: { not: null } },
      select: { word: true, example: true },
    });
    // split the words into correct and incorrect answers
    wordsWithExample = _.shuffle(wordsWithExample);
    const correctAnswers = wordsWithExample.slice(0, 5);
    let incorrectPool = wordsWithExample.slice(5);

    if (userId) {
      const result = await db.$transaction(async (prisma) => {
        const newGame = await prisma.game.create({
          data: {
            userId: userId,
            type: type,
          },
        });

        const questions = [];

        for (const word of correctAnswers) {
          // shuffle and pick two incorrect words
          const shuffledIncorrect = _.sampleSize(incorrectPool, 2);
          // remove the already used words from the pool
          incorrectPool = _.difference(incorrectPool, shuffledIncorrect);
          const example = hideWordFromSentence(word.word, word.example);
          const question = await prisma.question.create({
            data: {
              gameId: newGame.id,
              questionText: example,
              correctAnswer: word.word,
              choices: {
                create: [
                  { choice: word.word },
                  { choice: shuffledIncorrect[0].word },
                  { choice: shuffledIncorrect[1].word },
                ],
              },
            },
          });

          const finalWords = _.shuffle([
            word.word,
            shuffledIncorrect[0].word,
            shuffledIncorrect[1].word,
          ]);
          word["example"] = example;
          questions.push({
            id: question.id,
            answer: word,
            words: finalWords,
          });
        }
        return questions;
      });
      res.json(result);
    } else {
      // If no valid userId, just return the shuffled words without creating game data
      const questions = correctAnswers.map((word) => {
        const shuffledIncorrect = _.sampleSize(incorrectPool, 2);
        incorrectPool = _.difference(incorrectPool, shuffledIncorrect);
        const example = hideWordFromSentence(word.word, word.example);
        word["example"] = example;
        return {
          answer: word,
          words: _.shuffle([
            word.word,
            shuffledIncorrect[0].word,
            shuffledIncorrect[1].word,
          ]),
        };
      });
      res.json(questions);
    }
  } catch (error) {
    console.error("Error fetching sentences:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
