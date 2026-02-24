import * as Engine from "./common.mjs";

window.onload = function () {
  document
    .getElementById("check-spelling")
    .addEventListener("click", inputHandler);
};

function inputHandler(event) {
  const textArea = document.getElementById("spell-input").value;

  const cleanWordsArr = textArea
    .replace(/-/g, " ")
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);
  const misspelledWord = Engine.misspelledWordsList(cleanWordsArr);
  console.log(misspelledWord);
}
