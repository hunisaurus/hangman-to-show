//import PromptSync from 'prompt-sync';
//const prompt = PromptSync();

import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
import countriesCapitals from './countries-and-capitals.js';
import {hangmanpicsEasy} from './hangmanpics.js';
import {hangmanpicsHard} from './hangmanpics.js';

let hangmanpics = [];
let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//pick a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let game = "yes";
while (game === "yes"){
    let word = "";
    let level = "";
    let lives = 0;
    level = "";
    while (level !== "easy" && level !== "hard"){
        console.clear();
        console.log("What difficulty do you wish to play on?");
        console.log("(easy/hard)");
        level = prompt("");
        level = level.toLowerCase();
    }
    if (level === "easy"){
        lives = 10;
    } else if (level === "hard"){
        lives = 5;
    }
    let guess = "";
    let unknown = "";
    let currentGuess = "";
    let goodGuesses = [];
    let wrongGuesses = [];

    // random country or capital:

    let corc = ["country", "city"];
    corc = corc[Math.floor(Math.random()*corc.length)]
    let pullword = countriesCapitals[Math.floor(Math.random()*countriesCapitals.length)];
    // console.log(pullword);
    word = pullword[corc];
    // console.log(word);
    // prompt("");
    
    // word = "BilBao";
    let original = word;
    word = word.toLowerCase();
    // console.log(word);
    for (let n of word){
        if (n === " "){
            unknown += " ";
        } else if (n === "'"){
            unknown += "'";
        } else {
            unknown += "_";
        }
    }
    // console.log(unknown);
    console.clear();
    while (unknown.toLowerCase() !== word.toLowerCase()) {
        // console.clear();
        guess = "";
        currentGuess = "";
        while (guess === "" || !isNaN(guess) || !abc.includes(guess)){
            if (level === "easy" && lives < 10){
                console.log(hangmanpicsEasy[(hangmanpicsEasy.length - 1) - lives]);
            } else if (level === "hard" && lives < 5){
                console.log(hangmanpicsHard[(hangmanpicsHard.length - 1) - lives]);
            }
            console.log("Your word is:");
            console.log(unknown);
            console.log("\nGuess a letter! (...from the english alphabet...)");
            console.log("(" + lives + " lives left)");
            guess = prompt("");
            if (guess === "quit"){
                console.log("Thank you for playing! Bye!");
                process.exit();
            }
            guess = guess.toLowerCase();
            if (goodGuesses.includes(guess) || wrongGuesses.includes(guess)){
                console.clear();
                console.log("You have already guessed that letter!");
            } else if (word.includes(guess)){
                console.clear();
                goodGuesses.push(guess);
            } else if (!word.includes(guess)){
                console.clear();
                lives -= 1;
                if (!wrongGuesses.includes(guess)){
                    wrongGuesses.push(guess);
                } 
            }
            if (wrongGuesses.length > 0) {
                console.log("Your wrong guesses so far: " + wrongGuesses);
            }
        }
        // console.log(word);
        // prompt("");
        for (let i = 0; i < word.length; i++){
            if (goodGuesses.includes(word[i])){
                    currentGuess += original[i];
            } else if (word[i] === " ") {
                currentGuess += " ";
            } else if (word[i] === "'") {
                currentGuess += "'";
            } else {
                currentGuess += "_";
            }
        }
        unknown = currentGuess;
        // console.log(unknown);
        // prompt("");
        if (lives === 0){
            break
        }
    }
    if (lives === 0){
        console.clear();
        console.log(hangmanpicsEasy[hangmanpicsEasy.length-1])
        console.log("YOU LOST!\n");
        console.log("Your word was: " + original);
    } else {
        console.clear();
        word = unknown;
        console.log("CONGRATULATIONS! YOU WON!");
        console.log("\nYour word is: " + word);
    }
    console.log("\nDo you wish to play another game?\n(yes/no)");
    game = prompt("");
}
