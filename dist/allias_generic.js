"use strict";
// Les Type ne seront présent UNIQUEMENT dans le code TS
// On ne le retrouvera pas dans le js compilé
// Il sert juste à aider le dev
const user = { firstname: 'serge', lastname: 'Marius' };
const date = Date.now().toString();
// Les type Générique
function identity(arg) {
    return arg;
}
const a = identity(3); // le Type de "a" sera déduit "any", alors que c'est un Number. C'est dommage....
// il vaut mieux faire
function identityMieux(arg) {
    return arg;
}
const b = identityMieux(3); // Du coup, b est de type number !
// on peut même ce passer de lui préciser le <number>, TS peut le déduire
function first(arg) {
    return arg[0];
}
const c = first(['aze', 'zer', 'ert']); // dans ce cas, TS donne "any" comme type de c
// Alors que
function first2(arg) {
    return arg[0];
}
const c2 = first2(['aze', 'zer', 'ert']); // dans ce cas, TS donne "string" comme type de c2
const c3 = first2([2, 5, 88]); // dans ce cas, TS donne "number" comme type de c3
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const d = consoleSize(3);
// pour que cette appel à la fonction consoleSize return un erreur (car 3 n'a pas la poperty length)
// on fera ceci, afin que cela nous retourne l'erreur : La propriété 'length' n'existe pas sur le type 'Type'.
// function consoleSize2<Type>(arg:Type) {
//   console.log(arg.length);
//   return arg;
// }
// Du coup, on peut restreindre un peu les Type possible que l'on peu passer à la fonction
function consoleSize3(arg) {
    console.log(arg.length);
    return arg;
}
// et du coup, cela implique que le parametre passé à la méthode propose la property 'length'
const d2 = consoleSize3([3]);
// le type de Usemane2 sera string. Mais si on modifie le type de "firstaname" sur le type User, cela suivra sur le type de Username2
// enfin, on peut Extirper le type de façon dynamique (pour construire un type à la volée par ex)
const test = {
    prenom: 'serge',
    nom: 'Marius',
    age: 53,
};
// TS va déduire automatiquement le type de Test :
// type Test = {
//     prenom: string;
//     nom: string;
//     age: number;
// }
//# sourceMappingURL=allias_generic.js.map