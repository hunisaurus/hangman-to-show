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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let x = "";
let y = getRandomInt(2);
let difficulty="";
//console.log(y)

if (y=0) {
    x= getRandomInt(countries.length)
} else {
    x= getRandomInt(capitals.length)
}

let country = countries[x]

console.log("Welcome to a game of Hangman...");
difficulty = prompt("Do you want it easy, or hard?")
while (difficulty.toLowerCase() !== "easy" && difficulty.toLocaleLowerCase() !== "hard") {
    difficulty = prompt("Do you want it easy, or hard?")
}

if (difficulty === "easy") {
    console.clear
    life = 10;
    hangmanpics = hangmanpicsEasy
    console.log("Baby wants his bottle??")
} else {
    console.clear
    life = 5;
    hangmanpics=hangmanpicsHard
    console.log("I see you like pain!")
}

for (const element of country) {
    mystery.push(element);
}
//console.log(mystery)
for (const element of mystery) {
    interim.push("_");
}

while (displayed.toString() != mystery.toString()) {
    console.clear
    let letter = prompt("Please enter a letter.");
if (letter.toLocaleLowerCase() === "quit") {
    console.clear
    console.log(hangmanpics[hangmanpics.length-1])
    console.log("Too bad, you dieded! :D ")
        process.exit();
}

else if (wrongLetters.includes(letter.toLocaleLowerCase()) || wrongLetters.includes(letter.toLocaleUpperCase())) {
    console.clear
    console.log("You already tried that.")
}

else if (!(mystery.toString().toLowerCase().includes(letter.toLocaleLowerCase()))) {
    //console.log(mystery.toString().includes(letter))
    life --
    wrongLetters.push(letter.toLocaleLowerCase())
    console.clear
    console.log(hangmanpics[hangmanpics.length-1-life])
    console.log(`The number of guesses left for you is: ${life}`)
}
for (let index = 0; index < mystery.length; index++) {
    console.clear
    //console.log(`your life is ${life}`)
    const element = mystery[index];
    if (life === 0){

        console.log(hangmanpics[hangmanpics.length-1])
        console.log("You dieded")
        process.exit();
    }
    else if (element.toLocaleLowerCase() === letter) {
        console.clear
        console.log (`${element} is a MATCH!`)
        //console.log(true)
        interim[index]=element
        //console.log(interim)
        //console.log(interim[index])  
        //console.log(displayed)
    }   
    displayed[index] = interim[index]
}
//console.log(displayed)
//console.log(mystery)
console.clear
console.log(...displayed)   
console.log(`The following incorrect letters you have already used: `, ...wrongLetters)

}
console.clear
console.log("You win!")