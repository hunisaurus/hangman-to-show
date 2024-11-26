# Hangman
Stickman's in trouble! Implement the popular Hangman game. Add a full fledged game flow with a main menu and optionally some cool graphics in the console!

## What are you going to learn?
Write solid control flow.
Use strings and arrays.
Use and validate user input.
Handle normal and edge cases.
Use random numbers.
Create ASCII art.

## Tasks

### Hangman game
Implement a basic hangman game flow. You can use any (even a constant) word to guess, focus on the guessing logic and the termination of the game.

- The game requires the user to guess all the letters belonging to a word.
- The initial game state is displayed as _ _ _ _ _ _ _ _ (one underscore for each letter in word).
- The game state is displayed as _ o d _ _ o o _ if letters 'd' and 'o' are revealed.
- It is possible to make guesses. Validate whether the guessed letter is included in the word.
- When a guessed letter does not occur in word, the player loses one life.
- When a guess is repeated (regardless of its occurrences), the player is notified, and nothing happens.
- When a guess is wrong (either a new or a repeated letter), the previous wrong letters are shown to the user.
- The player wins when all letters in word are revealed.
- The player loses when the number of wrong guesses is higher than the initial value of lives parameter (not counting repeated guesses).
- When the player types 'quit' as input, the program says good-bye and terminates.

### Case sensitivity
The gameplay is case insensitive, the word display is case sensitive.

- Both uppercase and lowercase letters are considered valid input.
- Uppercase and lowercase letter guesses reveal the same letters (e.g. both c and C guesses reveal all the cs in the word, regardless of their ca- e).
- Letters of different cases behave as if they were the same when checking repetitions (e.g. entering c after a C would count as a repetition).
- On the displaying side, however, letters are revealed as they originally appear in word (e.g. successfully guessing c shows C _ _ _ c _ _ _ for Codecool).

### Graphics
Add ASCII art to visualize lives left.

- The game state display is accompanied by an ASCII art depending on the number of lives left.
- The art sequence is adapted to the starting value of the lives parameter (at least between 3 and 7) – this means that the game over art is always the same.

### Load words
The game uses a random word from a pre-defined word collection.

- The game randomly picks a word at each run.
- The game randomly picks a country or a capital from the pre-loaded arrays.

### Load words
The game uses a random word from a pre-defined word collection.

- The game randomly picks a word at each run.
- The game randomly picks a country or a capital from the pre-loaded arrays.

## Hints
- Run npm install first in the project folder to install the necessary dependencies. Start the game by typing node hangman.js.
- Store the state of the game (such as the revealed and missed letters) with the help of arrays or other data structures.
- Try to create the main game loop first.
- Ideal team size is 2. Maximum team size is 3.