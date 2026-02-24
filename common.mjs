import words from "./words.json" with { type: "json" };

export const state = {
  basicEnglishWords: new Set(words),
  userDictionary: [],
};

function startsWithCapital(word) {
  return word[0] === word[0]?.toUpperCase();
}

export function misspelledWordsList(wordsList) {
  let list = [];
  for (const word of wordsList) {
    if (
      !(
        startsWithCapital(word) ||
        state.basicEnglishWords.has(word.toLowerCase()) ||
        state.userDictionary.includes(word.toLowerCase())
      )
    ) {
      list.push(word);
    }
  }
  return list;
}
