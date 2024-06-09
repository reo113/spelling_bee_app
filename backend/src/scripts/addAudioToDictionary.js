const { db } = require("../utils/db");
const { fetchAudioFromWordnik } = require("../utils/fetchAudio");
const { checkRateLimit } = require("../utils/throttle");

const updateDictionaryAudio = async () => {
  try {
    const dictionaryEntries = await db.dictionary.findMany({
      where: { audio: null }, // Only process entries without an audio URL
    });

    for (const entry of dictionaryEntries) {
      await checkRateLimit(); // Throttle requests
      const audioUrl = await fetchAudioFromWordnik(entry.word);
      if (audioUrl) {
        await db.dictionary.update({
          where: { id: entry.id },
          data: { audio: audioUrl },
        });
        console.log(`Updated audio URL for ${entry.word}`);
      } else {
        console.log(`No audio found for ${entry.word}, skipped.`);
      }
    }
  } catch (error) {
    console.error("Error updating dictionary:", error.message);
  } finally {
    await db.$disconnect();
  }
};

updateDictionaryAudio();
