const { PrismaClient } = require('@prisma/client');
const wordsData = require('../dictionary.json'); 

const prisma = new PrismaClient();

async function main() {
  for (const [word, definition] of Object.entries(wordsData)) {
    await prisma.dictionary.create({
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
    await prisma.$disconnect();
  });
