const translate = (dialogue) => {
  wordArr = dialogue.split(" ");
  const vowelsRegex = /[aeiou]/i;
  const pigArray = [];
  wordArr.forEach((word) => {
    if (/[0-9@&$#!]/.test(word)) {
      pigArray.push(word);
    } else if (vowelsRegex.test(word[0])) {
      pigArray.push(word + "way");
    } else {
      const index = word.search(vowelsRegex);
      pigArray.push(word.slice(index) + word.slice(0, index) + "ay");
    }
  });
  return pigArray.join(" ");
};

module.exports = translate;
