import words from "./words.json" with { type: "json" };



export const state = {
    BasicEnglishWords: new Set (words),
    userDictionary:[]
}


