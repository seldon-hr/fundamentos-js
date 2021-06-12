const phrase = "Hoy es un gran dia para programar";
const word = "programar";

const findWord = function (phrase, word) {
  if (phrase.search(word) >= 0) {
      return true
    } else {
      return false;
      }
};

console.log(findWord(phrase, word));