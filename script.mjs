import * as Engine from "./common.mjs";

window.onload = function () {
  document
    .getElementById("check-spelling")
    .addEventListener("click", renderMisSpelledWords);
  document
    .getElementById("spell-results")
    .addEventListener("click", addToDictionaryHandler);
  document.getElementById("spell-input").addEventListener("input", () => {
    document.getElementById("spell-results").textContent = "";
  });
};

function renderMisSpelledWords(event) {
  const textArea = document.getElementById("spell-input").value;

  const cleanWordsArr = textArea
    .replace(/-/g, " ")
    .replace(/[: ,.?!":;]/g, "")
    .split(/\s+/);
  const misspelledWords = Engine.misspelledWordsList(cleanWordsArr);
  renderMisspellings(misspelledWords);
}

function renderMisspellings(misspelledWords) {
  const root = document.getElementById("spell-results");
  root.textContent = "";
  if (misspelledWords.length === 0) return;

  const warning = document.createElement("p");
  warning.className = "warning";
  warning.textContent = "Spelling mistakes found: "; //innerHTML later for highlight
  root.appendChild(warning);

  const list = document.createElement("ul");
  list.id = "misspelled-list";
  root.appendChild(list);

  for (const word of misspelledWords) {
    const li = document.createElement("li");
    li.className = "mistake";
    
    const strong = document.createElement("strong");
    strong.textContent = word;
    li.appendChild(strong);

    const btn = document.createElement("button");
    btn.textContent = " Add to the dictionary";
    btn.type = "button";

    li.append("  ");
    li.appendChild(btn);
    console.log(li);
    list.append(li);
  }
}

function addToDictionaryHandler(event) {
  const li = event.target.closest(".mistake");
  const word = li.querySelector("strong").textContent;
  Engine.state.userDictionary.push(word);
  console.log(Engine.state.userDictionary);
  renderMisSpelledWords();
}

//: ,.?!":;