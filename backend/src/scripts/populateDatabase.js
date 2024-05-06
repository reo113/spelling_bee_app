const wordsData = require('../dictionary.json');
const { db } = require("../utils/db");
const spanishWords = require("../SpanishDictionary.json");
async function main() {
  for (const [word, definition] of Object.entries(spanishWords)) {
    await db.spanishDictionary.create({
      data: {
        word: word,
        definition: definition
      }
    });
  }
}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
