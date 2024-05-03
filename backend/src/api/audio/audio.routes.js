const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");
const router = express.Router();
const { checkRateLimit } = require('../../utils/throttle');
const { fetchAudioFromWordnik } = require('../../utils/fetchAudio');

router.get("/", async (req, res) => {
    console.log("Fetching words and audio...");
    try {
        let wordsWithAudio = await db.dictionary.findMany({
            take: 100,
            where: { audio: { not: null } },
            select: { word: true, audio: true, id: true },
        });
        // Shuffle the words and pick 10 for the game
        wordsWithAudio = _.shuffle(wordsWithAudio);
        const wordPool = wordsWithAudio.slice(0, 10);

        const result = await Promise.all(wordPool.map(async (word) => {
            await checkRateLimit(); // Throttle requests
            const audioUrl = await fetchAudioFromWordnik(word.word);
            if (audioUrl) {
                await db.dictionary.update({
                    where: { id: word.id },
                    data: { audio: audioUrl }
                });
                console.log(`Updated audio URL for ${word.word}`);
            } else {
                console.log(`No audio found for ${word.word}, skipped.`);
            }
            return {
                answer: word,
                audio: audioUrl,
            };
        }));

        res.json(result);
    } catch (error) {
        console.error("Error fetching words and audio:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;