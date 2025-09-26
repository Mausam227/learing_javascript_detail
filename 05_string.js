const name = "mausam";
const repoCount = 50;


// console.log(name + repoCount + "is a good");

console.log(`Hello ${name} you have ${repoCount} repo`); // template string or template literal

const gameName = new String('mausam-kumar-sah')

console.log(gameName[0]);
console.log(gameName.__proto__); // String.prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.slice(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  mausam.   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mausam.com/mausam%20"


console.log(url.replace('%20','-'));

console.log(url.includes('mausam'));

console.log(gameName.split('-'));
