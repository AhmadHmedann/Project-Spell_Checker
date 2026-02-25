import words from "./words.json" with { type: "json" };

export const state = {
  basicEnglishWords: new Set(words),
  userDictionary: [],
};

function startsWithCapital(word) {
  return /^[A-Z]/.test(word);
}
export function cleanStringInput(textAreaInput) {
  return textAreaInput
    .replace(/-/g, " ")
    .replace(/[,.?!":;]/g, "")
    .split(/\s+/)
    .filter(Boolean);
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
