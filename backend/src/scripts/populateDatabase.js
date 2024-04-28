const wordsData = require('../../dictionary.json');
const { db } = require("../../utils/db");

async function main() {
  for (const [word, definition] of Object.entries(wordsData)) {
    await db.dictionary.create({
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
