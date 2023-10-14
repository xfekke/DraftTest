// roles: Assasin, Fighter, Mage, Marksman, Support, Tank.
// types: AD, AP
// prio: yes/no
// prompt to ask what is needed: What do you need?(prompt): Player(role), Role, Type or Prio.
import fs from 'fs';
import PromptSync from 'prompt-sync';

const rawDataFekke = fs.readFileSync('fekke.json');
const rawDataOz = fs.readFileSync('oz.json');
const rawDataCaide = fs.readFileSync('caide.json');
const rawDataUvec = fs.readFileSync('uvec.json');
const rawDataGoats = fs.readFileSync('goats.json');
const dataFekke = JSON.parse(rawDataFekke);
const dataOz = JSON.parse(rawDataOz);
const dataCaide = JSON.parse(rawDataCaide);
const dataUvec = JSON.parse(rawDataUvec);
const dataGoats = JSON.parse(rawDataGoats);

const champFekke = dataFekke.name;
const champOz = dataOz.name;

console.log("What do you need?");
console.log("1. Player");
console.log("2. Role");
console.log("3. Type");
console.log("4. Prio");

const prompt = PromptSync();

const userInput = prompt("Enter number -");
const num = parseFloat(userInput);

if (isNaN(num)) {
    console.log("You did not enter a valid number");
} else {
    console.log("Proceed");
}

// Choose what option 1-4 to proceed with. Another prompt will open for each.
if (num === 1) {
    console.log("1. Fekke");
    console.log("2. Oz");
    console.log("3. Caide");
    console.log("4. Uvec");
    console.log("5. Goats");

    const playerChoice = prompt("Enter the number of your option - ");
    const playerNum = parseFloat(playerChoice);

    if (playerNum === 1) {
        console.log(`You chose Fekke`);
        console.log("He can play the following champs:");
        for (const champ of dataFekke.characters) {
            console.log(champ.name);
        }
    } else if (playerNum === 2) {
        console.log(`You chose Oz`);
        console.log("He can play the following champs:");
        for (const champ of dataOz.characters) {
            console.log(champ.name)
        }
    } else if (playerNum === 3) {
        console.log(`You chose Caide`);
        console.log("He can play the following champs:");
        for (const champ of dataCaide.characters) {
            console.log(champ.name)
        }
    } else if (playerNum === 4) {
        console.log(`You chose Uvec`);
        console.log("He can play the following champs:");
        for (const champ of dataUvec.characters) {
            console.log(champ.name)
        }
    } else if (playerNum === 5) {
        console.log(`You chose Goats`);
        console.log("He can play the following champs:");
        for (const champ of dataGoats.characters) {
            console.log(champ.name)
        }
    } else {
        console.log("Invalid player choice.");
    }
} else if (num === 2) {
    console.log("Choose a role:");
    console.log("1. Engage");
    console.log("2. Support");
    console.log("3. Fighter");
    console.log("4. Mage");
    console.log("5. Assassin");
    console.log("6. Marksman");
    console.log("7. Tank");
    const roleChoice = prompt("Enter the number of your option - ");
    const roleNum = parseFloat(roleChoice);
    const allCharacters = dataFekke.characters.concat(dataOz.characters, dataCaide.characters, dataGoats.characters, dataUvec.characters);

    if (roleNum === 1) {
        console.log("List of engage type champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Engage")) {
                console.log(champ.name);
            }
        }
    } else if (roleNum === 2) {
        console.log("List of support type champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Support")) {
                console.log(champ.name);
            }
        }
    } else if (roleNum === 3) {
        console.log("List of fighter type champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Fighter")) {
                console.log(champ.name);
            }
        }
    } else if (roleNum === 4) {
        console.log("List of mage type champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Mage")) {
                console.log(champ.name);
            }
        }
    } else if (roleNum === 5) {
        console.log("List of assassin type champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Assassin")) {
                console.log(champ.name);
            }
        }
    } else if (roleNum === 6) {
        console.log("List of marksmen type champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Marksman")) {
                console.log(champ.name);
            }
        }
    } else if (roleNum === 7) {
        console.log("List of tanktype champions:");
        for (const champ of allCharacters) {
            if (champ.role.includes("Tank")) {
                console.log(champ.name);
            }
        }
    } else {
        console.log("Invalid role choice.");
    }
}






