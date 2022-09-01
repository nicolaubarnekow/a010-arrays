const numerosArrays = [1,4,8,16,20];
const stringsArrays = [ "a", "b", "c", "u", "g" ];
const booleansArrays = [ "n", 4, true, false, false, true, 24, 29, "a"];

const numerosArraysCopia = numerosArrays.slice();
const stringsArraysCopia = stringsArrays.slice();
const booleansArraysCopia = booleansArrays.slice();

numerosArrays.push(12);
stringsArrays.pop();
booleansArrays.splice(1, 1);


console.log(numerosArraysCopia, numerosArraysCopia);
console.log(stringsArraysCopia, stringsArraysCopia);
console.log(booleansArraysCopia, booleansArrays);

