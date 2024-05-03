const axios = require('axios');
const { cleanWord } = require('./cleanwords'); 
const apiKey = "v200pgdwucwqdtqnp2dll678gosivzb0761lllr8w0ql2na70";
const { updateRateLimits } = require('./throttle');

const fetchAudioFromWordnik = async (word) => {
    word = cleanWord(word);
    const url = `https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=10&api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        updateRateLimits(response.headers);
        const audioFiles = response.data;

        // find the first audio that is defined
        const validAudio = audioFiles.find(audio => audio.fileUrl);
        return validAudio ? validAudio.fileUrl : null;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            const retryAfter = error.response.headers['retry-after'] * 1000; 
            console.log(`Rate limit exceeded, retrying after ${retryAfter} milliseconds`);
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return fetchAudioFromWordnik(word); // Retry fetching
        }
        console.error(`Failed to fetch audio for ${word}:`, error.message);
        return null;
    }
};

module.exports = { fetchAudioFromWordnik };