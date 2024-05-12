function cleanWord(word) {
  // removes any character that is not a letter (a-z or A-Z) and lowercase the word
  return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
}
module.exports = { cleanWord };
