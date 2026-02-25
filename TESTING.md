Rubric

1.The website has an input that allows the user to write some text:
Run locally with a local server.

- Confirm a textarea is visible.
- Type a few sentences into the textarea and confirm the text appears.

The website has a way for the user to triggering a spell check

- Confirm there is a button labelled “Check Spelling”.
- Click the button after typing text.

When triggered, the spell check should check every word in the input to see if it exists in the Basic English dictionary

- Type a mix of Basic English words and non-Basic words .
- Click “Check Spelling”.
- Confirm only the non-Basic word(s) appear in the misspelled list.

If a word does not exist in the dictionary, then it should be highlighted below the input as a spelling mistake

- Type a non-Basic word .
- Click “Check Spelling”.
- Confirm the word appears under the textarea as a mistake.

It should be obvious to the user that there is a spelling mistake, both with visuals and some explanatory text
Type a non-Basic word.

- Click “Check Spelling”.
- Confirm an explanatory message is shown (“Spelling mistakes found:”) and it is visually highlighted.

If a word does not exist in the dictionary, then a mechanism should exist to add the word to the dictionary. Adding the word to the dictionary should re-trigger the spell check and the newly added word should no longer be highlighted. If more than one word does not exist in the dictionary, they should be able to be added separately one at a time
Unit tests in common.test.mjs

"Correct" words (i.e. those found in the Basic English dictionary) that are adjacent to punctuation (which is defined as the following characters: ,.?!":;) should not be marked as spelling mistakes.
Unit tests in common.test.mjs

"Incorrect" words (i.e. those not found in the Basic English dictionary) that are adjacent to punctuation characters should still be marked as spelling mistakes
Unit tests in common.test.mjs

Words joined by hyphen should be treated separately, so if one or both of the words are "incorrect" (i.e. those not found in the Basic English dictionary) then it should be marked as a spelling mistake
Unit tests in common.test.mjs

The website must score 100 for accessibility in Lighthouse
I take a snapshot for each vies and make sure it's 100%.

Unit tests must be written for at least one non-trivial function
Tests cover non-trivial edge cases: punctuation removal, hyphen splitting, capitalised words being treated as correct, and custom dictionary behaviour.
