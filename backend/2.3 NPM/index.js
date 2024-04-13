// var generateName = require("sillyname");
// generate name using sillyname package
import generateName from "sillyname";
import superheroes  from "superheroes";


var sillyName = generateName();
console.log(`My name is  ${sillyName}. `)

const hero = superheroes.random();
console.log(`Im a ${hero}`)
