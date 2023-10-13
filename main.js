// roles: Assasin, Fighter, Mage, Marksman, Support, Tank.
// types: AD, AP
// prio: yes/no
// prompt to ask what is needed: What do you need?(prompt): Player(role), Role, Type or Prio.

const fs = require('fs');

const rawDataFekke = fs.readFileSync('fekke.json');
const rawDataOz = fs.readFileSync('oz.json');
import PromptSync from "prompt-sync"; 
const prompt = PromptSync({sigint: true}) 

const dataFekke = JSON.parse(rawDataFekke);
const dataOz = JSON.parse(rawDataOz);

//console.log(dataFekke);
//console.log(dataOz);

const champFekke = dataFekke.name
const champOz = dataOz.name

console.log("What do you need?")
console.log("1. Player")
console.log("2. Role")
console.log("3. Type")
console.log("4. Prio")

var userInput = prompt("Enter number -")
var num = parseFloat(userInput)

if (!isNan(num)) {
    console.log("You did not enter a valid number")
} else {
    console.log("Proceed")
}


//Choose what option 1-4 to proceed with. Another prompt will open for each.
if (userInput == 1) {
    console.log("1. Fekke")
    console.log("2. Oz")
}



