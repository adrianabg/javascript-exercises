'use strict'

/*
FASE1. IMPRIMIR LES LLETRES DEL NOM PER CONSOLA
*/

var letters = ["A", "D", "R", "I", "A", "N", "A"];
/*
var letters = prompt("Insert yout name", "Name");
while(letters == ""){
    letters = prompt("Insert a valid name");
}
*/

for(var i = 0; i < letters.length; i++){
    printletters(letters[i]);
}

/*
FASE 2 + EXTRA.  DETERMINAR SI ÉS VOCAL O CONSONANT + SI ÉS NÚMERO
*/

function printletters(lletra){
    var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

    if(!isNaN(letters[i])){
        console.log("Els noms personals no contenen números")
    }else if(vowels.indexOf(lletra) > -1){
        console.log("Vocal");
    }else{
        console.log("Consonant");
    }
}

/*
FASE 3. EMMAGATZEMAR LLETRES I NOMBRE DE COPS QUE APAREIXEN
*/

let myMap = new Map();

for(var i = 0; i < letters.length; i++){
    if(myMap.has(letters[i])){
        myMap.set(letters[i], myMap.get(letters[i]) + 1);
    }else{
        myMap.set(letters[i], 1);
    }
}

console.log(myMap);

/*
FASE 4. Passa dues arrays a una sola (nom+cognom) deixant un espai buit entre les dues.
*/

var nomComplet = [];

var surname = ["B", "I", "A", "R", "N", "E", "S"];

nomComplet.push(...letters,", ",...surname);

console.log(nomComplet);