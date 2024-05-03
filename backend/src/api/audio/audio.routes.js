const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let wordsWithAudio = await db.dictionary.findMany({
            take: 100,
            where: { audio: { not: null } },
            select: { word: true, audio: true, id: true },
        });
        // Shuffle the words and pick 10 for the game
        wordsWithAudio = _.shuffle(wordsWithAudio);
        const wordPool = wordsWithAudio.slice(0, 10);

        const result = wordPool.map((word) => {
            return {
                answer: word,
                audio: word.audio,
            };
        });

        res.json(result);
    } catch (error) {
        console.error("Error fetching words and audio:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;