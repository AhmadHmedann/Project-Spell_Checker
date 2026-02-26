# Project: Spell Checker


## Requirements







 The spell check should then be triggered again, and the word that was added to the dictionary should no longer be considered a misspelled word (so should _not_ be highlighted). **Note**: the custom dictionary does _not_ need to be saved, so reloading the page can reset back to the initial dictionary.

When the user changes the text in the input, the warning about misspelled words should be cleared.



## Supplied scaffolding

We have supplied a few sample files in the repo to demonstrate how you can define JSON data in one file and access this both from another file. Feel free to use these files in your solution if you want, or to just use them for inspiration for your own solution.

Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server - you can't open the `index.html` file using a `file://` URL.

## Rubric

All of the below requirements must be met for the project to be considered complete:

- The website has an input that allows the user to write some text
- The website has a way for the user to triggering a spell check
- When triggered, the spell check should check every word in the input to see if it exists in the Basic English dictionary
- If a word does not exist in the dictionary, then it should be highlighted below the input as a spelling mistake
- It should be obvious to the user that there is a spelling mistake, both with visuals and some explanatory text
- If a word does not exist in the dictionary, then a mechanism should exist to add the word to the dictionary. Adding the word to the dictionary should re-trigger the spell check and the newly added word should no longer be highlighted. If more than one word does not exist in the dictionary, they should be able to be added separately one at a time
- "Correct" words (i.e. those found in the Basic English dictionary) that are adjacent to punctuation (which is defined as the following characters: `,.?!":;`) should not be marked as spelling mistakes
- "Incorrect" words (i.e. those not found in the Basic English dictionary) that are adjacent to punctuation characters should still be marked as spelling mistakes
- Words joined by hyphen should be treated separately, so if one or both of the words are "incorrect" (i.e. those not found in the Basic English dictionary) then it should be marked as a spelling mistake
- The website must score 100 for accessibility in Lighthouse
- Unit tests must be written for at least one non-trivial function

Some examples of correct Basic English:

- `he go to the island`
- `they make a fire`
- `he will get married, she will not`
- `red-orange fire`
- `I love Glasgow`

Some examples of incorrect Basic English:

- `hello world`
- `they create some dinner`
- `she give gift, then go out`
- `he like egg-nog`
- `go to birmingham`