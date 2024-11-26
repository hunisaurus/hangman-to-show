//import PromptSync from 'prompt-sync';
//const prompt = PromptSync();

import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
import countriesCapitals from './countries-and-capitals.js';
const capitals = countriesCapitals.map(e => e.city);
const countries = countriesCapitals.map(e => e.country);
import {hangmanpicsEasy} from './hangmanpics.js';
import {hangmanpicsHard} from './hangmanpics.js';

let hangmanpics=[];
let mystery = [];
let interim= [];
let displayed=[""];
let wrongLetters = [];
let life;
let countOrCap=""
//func to pick a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let x = "";


//pick randomly if countries or capitals array will be used, adjust range of random numbers accordingly
let y = getRandomInt(2);
if (y=0) {
    x= getRandomInt(countries.length-1)
    countOrCap=countries[x]
} else {
    x= getRandomInt(capitals.length-1)
    countOrCap=capitals[x]    
}
//choose difficulty, adjust ascii art array accordingly
let difficulty="";
console.log("Welcome to a game of Hangman...");
difficulty = prompt("Do you want it easy, or hard?")
while (difficulty.toLowerCase() !== "easy" && difficulty.toLocaleLowerCase() !== "hard") {
    console.clear()
    difficulty = prompt("Do you want it easy, or hard?")
}
if (difficulty === "easy") {
    console.clear()
    life = 10;
    hangmanpics = hangmanpicsEasy
    console.log("Baby wants his bottle??")
} else {
    console.clear()
    life = 5;
    hangmanpics=hangmanpicsHard
    console.log("I see you like pain!")
}
//fill 1st cache array from countries and capitals
for (const element of countCap) {
    mystery.push(element);
}
//fill 2nd cache array with "_"
for (const element of mystery) {
    interim.push("_");
}
//keep in loop until first cache array contents == with displayed array contents
while (displayed.toString() != mystery.toString()) {
    
    let letter = prompt("Please enter a letter.");
if (letter.toLocaleLowerCase() === "quit") {
    console.clear()
    console.log(hangmanpics[hangmanpics.length-1])
    console.log("Too bad, you dieded! :D ")
        process.exit();
}

else if (wrongLetters.includes(letter.toLocaleLowerCase()) || wrongLetters.includes(letter.toLocaleUpperCase())) {
    console.clear()
    console.log("You already tried that.")
}
//decrement number of tries and display ascii art
else if (!(mystery.toString().toLowerCase().includes(letter.toLocaleLowerCase()))) {  
    life --
    wrongLetters.push(letter.toLocaleLowerCase())
    console.clear()
    console.log(hangmanpics[hangmanpics.length-1-life])
    console.log(`The number of guesses left for you is: ${life}`)
}
for (let index = 0; index < mystery.length; index++) {
    const element = mystery[index];
    if (life === 0){                                        //handle loosing all tries
        console.clear()
        console.log(hangmanpics[hangmanpics.length-1])
        console.log("You dieded")
        process.exit();
    }
    else if (element.toLocaleLowerCase() === letter) {      //match found, mark indexes in 2nd cache array
        console.log (`${element} is a MATCH!`)
        interim[index]=element        
    }   
    displayed[index] = interim[index]                       //push matches into displayed array indexes
}
console.log(...displayed)                                   //display current status of found and wrong chars
console.log(`The following incorrect letters you have already used: `, ...wrongLetters)

}
console.clear()
console.log("You win!")