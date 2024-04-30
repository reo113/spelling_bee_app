const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let wordsWithExample = await db.example.findMany({
            take: 100,
            where: { example: { not: null } },
            select: { word: true, example: true, id: true },
        });
        // split the words into correct and incorrect answers
        wordsWithExample = _.shuffle(wordsWithExample);
        const correctAnswers = wordsWithExample.slice(0, 10);
        let incorrectPool = wordsWithExample.slice(10);

        const result = correctAnswers.map((word) => {
            //shuffle and pick two incorrect words
            const shuffledIncorrect = incorrectPool.slice(0, 2);
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
        console.error("Error fetching sentences:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;