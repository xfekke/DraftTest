// roles: Assasin, Fighter, Mage, Marksman, Support, Tank.
// types: AD, AP

const fs = require('fs');

const rawDataFekke = fs.readFileSync('fekke.json');
const rawDataOz = fs.readFileSync('oz.json');

const dataFekke = JSON.parse(rawDataFekke);
const dataOz = JSON.parse(rawDataOz);

console.log(dataFekke);
console.log(dataOz);
