// const apiKey = "v200pgdwucwqdtqnp2dll678gosivzb0761lllr8w0ql2na70";
// const urlr = `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&excludePartOfSpeech=noun-plural&limit=5&api_key=${apiKey}`;

const { PrismaClient } = require("@prisma/client");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    let wordsWithDefinitions = await prisma.dictionary.findMany({
      take: 100,
      select: { word: true, definition: true },
    });

    // split the words into correct and incorrect answers
    wordsWithDefinitions = _.shuffle(wordsWithDefinitions);
    const correctAnswers = wordsWithDefinitions.slice(0, 10);
    let incorrectPool = wordsWithDefinitions.slice(10);

    const result = correctAnswers.map((word) => {
      //shuffle and pick two incorrect words
      const shuffledIncorrect = _.shuffle(incorrectPool).slice(0, 2);
      // remove the already used words from the pool
      incorrectPool = incorrectPool.filter(
        (def) => !shuffledIncorrect.includes(def)
      );
      const finalWords = _.shuffle([
        word.word,
        shuffledIncorrect[0].word,
        shuffledIncorrect[1].word,
      ]);

      return {
        answer: word,
        words: finalWords,
      };
    });
    res.json(result);
  } catch (error) {
    console.error("Error fetching words and definitions:", error);
    res.status(500).send("Server Error");
  }
});

// Assuming similar structure for other game types
router.get("/audio", async (req, res) => {
  // Your logic for handling 'audio' game type
});

router.get("/sentence", async (req, res) => {
  // Your logic for handling 'sentence' game type
});
module.exports = router;
