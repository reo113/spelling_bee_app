const apiKey = "v200pgdwucwqdtqnp2dll678gosivzb0761lllr8w0ql2na70";
const axios = require('axios');
const { db } = require("../utils/db");
const {cleanWord} = require('../utils/cleanwords');

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
const fetchExampleFromWordnik = async (word) => {
    word = cleanWord(word);
    const url = `https://api.wordnik.com/v4/word.json/${word}/examples?includeDuplicates=false&useCanonical=false&limit=10&api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        updateRateLimits(response.headers);
        const example = response.data;

        // Find the first example that is defined
        const validExample = example.examples.find(ex => ex.text);
        return validExample ? validExample.text : null;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            const retryAfter = error.response.headers['retry-after'] * 1000; // Convert to milliseconds
            console.log(`Rate limit exceeded, retrying after ${retryAfter} milliseconds`);
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return fetchExampleFromWordnik(word); // Retry fetching
        }
        console.error(`Failed to fetch example for ${word}:`, error.message);
        return null;
    }
};

const updateDictionaryExample = async () => {
    try {
        const dictionaryEntries = await db.dictionary.findMany({
            where: { example: null } // Only process entries without an example 
        });

        for (const entry of dictionaryEntries) {
            await checkRateLimit(); // Throttle requests
            const example = await fetchExampleFromWordnik(entry.word);
            if (example) {
                await db.dictionary.update({
                    where: { id: entry.id },
                    data: { example: example }
                });
                console.log(`Updated example URL for ${entry.word}`);
            } else {
                console.log(`No example found for ${entry.word}, skipped.`);
            }
        }
    } catch (error) {
        console.error('Error updating dictionary:', error.message);
    } finally {
        await db.$disconnect();
    }
};

updateDictionaryExample();
