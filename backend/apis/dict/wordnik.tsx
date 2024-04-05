const apiKey = "v200pgdwucwqdtqnp2dll678gosivzb0761lllr8w0ql2na70";
const urlr = `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&excludePartOfSpeech=noun-plural&limit=5&api_key=${apiKey}`;

export const getRandomWordsWithDef = async () => {
  try {
    const response = await fetch(urlr);
    const words = await response.json();

    const wordDefinitions: { [key: string]: string } = {};

    for (const wordObj of words) {
      const word = wordObj.word;
      const defResponse = await fetch(
        `https://api.wordnik.com/v4/word.json/${word}/definitions?&useCanonical=true&limit=5&api_key=${apiKey}`
      );
      const defData = await defResponse.json();
      console.log("defData", defData);

      let definitionFound = false;
      for (const def of defData) {
        if (def.text && !def.text.toLowerCase().includes(word.toLowerCase())) {
          wordDefinitions[word] = def.text;
          definitionFound = true;
          break;
        }
      }

      if (!definitionFound) {
        wordDefinitions[word] = "Definition not found";
      }
    }
    console.log("wordDefinitions", wordDefinitions);
    return wordDefinitions;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
};
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
