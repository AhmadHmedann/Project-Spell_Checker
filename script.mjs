import * as Engine from "./common.mjs";

window.onload = function () {
  const checkBTn = document.getElementById("check-spelling");
  checkBTn.addEventListener("click", renderMisspelledWords);

  const resultsRoot = document.getElementById("spell-results");
  resultsRoot.addEventListener("click", addToDictionaryHandler);

  const input = document.getElementById("spell-input");
  input.addEventListener("input", () => {
    resultsRoot.textContent = "";
  });
};

function renderMisspelledWords() {
  const textArea = document.getElementById("spell-input").value;

  const cleanWordsArr = Engine.cleanStringInput(textArea);
  const misspelledWords = Engine.misspelledWordsList(cleanWordsArr);
  renderMisspellings(misspelledWords);
}

function renderMisspellings(misspelledWords) {
  const root = document.getElementById("spell-results");
  root.textContent = "";
  if (misspelledWords.length === 0) return;

  const warning = document.createElement("p");
  warning.className = "warning";
  warning.innerHTML =
    "<mark> <strong>Spelling mistakes found:</strong> </mark>";
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
    btn.className = "add-word";
    btn.textContent = "Add to the dictionary";
    btn.type = "button";
    btn.dataset.word = word;

    li.append("  ");
    li.appendChild(btn);
    list.append(li);
  }
}

function addToDictionaryHandler(event) {
  const btn = event.target.closest("button.add-word");
  if (!btn) return;

  const word = btn.dataset.word;
  if (!word) return;

  const lower = word.toLowerCase();
  if (!Engine.state.userDictionary.includes(lower)) {
    Engine.state.userDictionary.push(lower);
  }
  renderMisspelledWords();
}
