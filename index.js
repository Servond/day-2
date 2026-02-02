const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Siapa nama kamu?");
console.log(name);

console.log(convertPrice(15000, 2));
