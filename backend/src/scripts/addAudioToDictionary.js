const apiKey = "v200pgdwucwqdtqnp2dll678gosivzb0761lllr8w0ql2na70";
const axios = require('axios');
const { db } = require("../utils/db");
import cleanWord from '../utils/cleanwords';

// default rate limit
let limits = {
    minute: { remaining: 100, limit: 100 },
    hour: { remaining: 100, limit: 100 }
};

// update rate limits from Wordnik response headers
function updateRateLimits(headers) {
    limits.minute.remaining = parseInt(headers['x-ratelimit-remaining-minute']);
    limits.minute.limit = parseInt(headers['x-ratelimit-limit-minute']);
    limits.hour.remaining = parseInt(headers['x-ratelimit-remaining-hour']);
    limits.hour.limit = parseInt(headers['x-ratelimit-limit-hour']);
}

// throttling requests based on remaining limits
const checkRateLimit = async () => {
    while (limits.minute.remaining < 1 || limits.hour.remaining < 1) {
        console.log('Approaching rate limit, pausing requests...');
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 1 minute
        // Re-set limits to avoid infinite loop
        limits.minute.remaining = 100;
        limits.hour.remaining = 100;
    }
};
const fetchAudioFromWordnik = async (word) => {
    word = cleanWord(word);
    const url = `https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=10&api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        updateRateLimits(response.headers);
        const audioFiles = response.data;

        // Find the first audio URL that is defined
        const validAudio = audioFiles.find(audio => audio.fileUrl);
        return validAudio ? validAudio.fileUrl : null;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            const retryAfter = error.response.headers['retry-after'] * 1000; // Convert to milliseconds
            console.log(`Rate limit exceeded, retrying after ${retryAfter} milliseconds`);
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return fetchAudioFromWordnik(word); // Retry fetching
        }
        console.error(`Failed to fetch audio for ${word}:`, error.message);
        return null;
    }
};

const updateDictionaryAudio = async () => {
    try {
        const dictionaryEntries = await db.dictionary.findMany({
            where: { audio: null } // Only process entries without an audio URL
        });

        for (const entry of dictionaryEntries) {
            await checkRateLimit(); // Throttle requests
            const audioUrl = await fetchAudioFromWordnik(entry.word);
            if (audioUrl) {
                await db.dictionary.update({
                    where: { id: entry.id },
                    data: { audio: audioUrl }
                });
                console.log(`Updated audio URL for ${entry.word}`);
            } else {
                console.log(`No audio found for ${entry.word}, skipped.`);
            }
        }
    } catch (error) {
        console.error('Error updating dictionary:', error.message);
    } finally {
        await db.$disconnect();
    }
};

updateDictionaryAudio();
