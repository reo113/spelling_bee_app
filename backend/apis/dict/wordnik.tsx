// const apiKey = "v200pgdwucwqdtqnp2dll678gosivzb0761lllr8w0ql2na70";
// const urlr = `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&excludePartOfSpeech=noun-plural&limit=5&api_key=${apiKey}`;

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const fetchWordsWithDefinitions = async () => {
  try {
    // Fetch 30 unique words
    const words = await prisma.dictionary.findMany({
      take: 30,
      select: {
        word: true,
        definition: true
      }
    });

    // fetch defs for randomness
    const allDefinitions = await prisma.dictionary.findMany({
      select: { definition: true }
    });









    
    // filter defs to avoid repeats
    const filteredDefinitions = allDefinitions.filter(def =>
      !words.some(w => w.definition === def.definition)
    );

    // Shuffle the definitions for random access
    shuffleArray(filteredDefinitions);

    // Array to hold final results
    const results: { [x: string]: string[]; }[] = [];
    // For each word, pick two random definitions that are not the word's own definition
    words.forEach(word => {
      // Ensure definitions are unique and not the same as the word's own definition
      let randomDefs = [];
      let count = 0;
      for (let def of filteredDefinitions) {
        if (def.definition !== word.definition) {
          randomDefs.push(def.definition);
          count++;
          if (count === 2) break;
        }
      }

      results.push({
        [word.word]: [word.definition, ...randomDefs]
      });
    });

    return results;
  } catch (error) {
    console.error('Error fetching words and definitions:', error);
  } finally {
    await prisma.$disconnect();
  }
};

function shuffleArray(array: string[] | any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}


export const getRandomWordsWithAudio = async () => {
  try {
    const response = await fetch(urlr);
    const words = await response.json();
    const wordAudio: { [key: string]: string } = {};

    for (const wordObj of words) {
      const word = wordObj.word;
      const audioResponse = await fetch(
        `https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=true&limit=5&api_key=${apiKey}`
      );
      if (!audioResponse.ok) continue;
      const audioData = await audioResponse.json();
      console.log("audioData", audioData);
      let audioFound = false;
      for (const audio of audioData) {
        if (audio.fileUrl) {
          wordAudio[word] = audio.fileUrl;
          audioFound = true;
          break;
        }
      }
      if (!audioFound) {
        wordAudio[word] = "";
      }
    }
    console.log("wordAudio", wordAudio);
    return wordAudio;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
};

export const getRandomWordsWithSentence = async () => {
  try {
    const response = await fetch(urlr);
    const words = await response.json();

    const wordSentences: { [key: string]: string } = {};

    for (const wordObj of words) {
      const word = wordObj.word;
      const sentenceResponse = await fetch(
        `https://api.wordnik.com/v4/word.json/${word}/examples?&useCanonical=true&limit=5&api_key=${apiKey}`
      );
      const sentenceData = await sentenceResponse.json();

      let sentenceFound = false;
      for (const example of sentenceData.examples) {
        if (example.text.includes(word)) {
          const replacedSentence = example.text.replace(
            word,
            "_".repeat(word.length)
          );
          wordSentences[word] = replacedSentence;
          sentenceFound = true;
          break;
        }
      }

      if (!sentenceFound) {
        wordSentences[word] = "Sentence not found";
      }
    }

    console.log("wordSentences", wordSentences);
    return wordSentences;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
};
