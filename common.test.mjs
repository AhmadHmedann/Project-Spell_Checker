import { misspelledWordsList,state,cleanStringInput } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("Hyphen words with punctuation are handled correctly", () => {
  const input = "blue-green, and feisty-cat.";
  const results = cleanStringInput(input);
  assert.deepEqual(results, ["blue", "green", "and", "feisty", "cat"]);
});

test("Words begin with capital letter, and the words that added to the user dictionary, should treated as correct",()=>{
   
  const wordsList = ["CYF","has","feisty","cat"] ;
  const results1 = misspelledWordsList(wordsList);
  

  state.userDictionary.push("feisty");
  state.userDictionary.push("has");
  const results2 = misspelledWordsList(wordsList);
  assert.deepEqual(results2, []);
})