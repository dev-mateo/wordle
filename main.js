const { words } = require("./words.json"); // Get json file of words
const word = words[Math.floor(Math.random()*words.length)]; // Get a random word
console.log(word); // Log that word to the console
