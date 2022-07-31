// Les Type ne seront présent UNIQUEMENT dans le code TS
// On ne le retrouvera pas dans le js compilé
// Il sert juste à aider le dev

type User = { firstname: string; lastname: string };
type DateString = string;

const user: User = { firstname: 'serge', lastname: 'Marius' };
const date: DateString = Date.now().toString();

// Les type Générique
function identity(arg: any): any {
  return arg;
}
const a = identity(3); // le Type de "a" sera déduit "any", alors que c'est un Number. C'est dommage....
// il vaut mieux faire
function identityMieux<ArgType>(arg: ArgType): ArgType {
  return arg;
}
const b = identityMieux<number>(3); // Du coup, b est de type number !
// on peut même ce passer de lui préciser le <number>, TS peut le déduire

function first(arg: any[]): any {
  return arg[0];
}
const c = first(['aze', 'zer', 'ert']); // dans ce cas, TS donne "any" comme type de c
// Alors que
function first2<Typ>(arg: Typ[]): Typ {
  return arg[0];
}
const c2 = first2(['aze', 'zer', 'ert']); // dans ce cas, TS donne "string" comme type de c2
const c3 = first2([2, 5, 88]); // dans ce cas, TS donne "number" comme type de c3

// On peut utiliser un "généric" dans la définition d'un type
type identity<ArgType> = (arg: ArgType) => ArgType;

// function consoleSize(arg) {
//   console.log(arg.length);
//   return arg;
// }
// const d = consoleSize(3);
// pour que cette appel à la fonction consoleSize return un erreur (car 3 n'a pas la poperty length)
// on fera ceci, afin que cela nous retourne l'erreur : La propriété 'length' n'existe pas sur le type 'Type'.
// function consoleSize2<Type>(arg:Type) {
//   console.log(arg.length);
//   return arg;
// }

// Du coup, on peut restreindre un peu les Type possible que l'on peu passer à la fonction
function consoleSize3<Type extends { length: number }>(arg: Type) {
  console.log(arg.length);
  return arg;
}
// et du coup, cela implique que le parametre passé à la méthode propose la property 'length'
const d2 = consoleSize3([3]);

// Types particuliers
type Username1 = keyof User; // le type sera l'ensemble des de User
type Username2 = User['firstname'];
// le type de Usemane2 sera string. Mais si on modifie le type de "firstaname" sur le type User, cela suivra sur le type de Username2

// enfin, on peut Extirper le type de façon dynamique (pour construire un type à la volée par ex)
const test = {
  prenom: 'serge',
  nom: 'Marius',
  age: 53,
};
type Test = typeof test;
// TS va déduire automatiquement le type de Test :
// type Test = {
//     prenom: string;
//     nom: string;
//     age: number;
// }

// le ReadOnly devant un type Permet de préciser qu'une property soit readonly (non modifiable)
// par exemple, dabs le cas de cette function, le tableau passé en parametre va etre modifié,
// du fait que reverse renvoie le tableau à inverser
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}
const arr1 = [1, 2, 3, 4];
console.log(arr1);
const arr2 = reverse(arr1);
console.log(arr1, arr2);
/**
 * output
 * [ 1, 2, 3, 4 ]
   [ 4, 3, 2, 1 ] [ 4, 3, 2, 1 ]
 */

// En ajoutant réadonly devant le type T[] du parametre, TS comprends que cela conduit à un blocage du fait du reverse
// on modifie alors le retour comme ceci, afin que cela renvoie un autre tableau
// Le readonly a permis de protéger le parametre d'entrer d'une évetuelle erreur de codage
function reverse2<T>(arr: readonly T[]): T[] {
  return [...arr].reverse();
}
const arr11 = [1, 2, 3, 4];
console.log(arr11);
const arr21 = reverse2(arr11);
console.log(arr11, arr21);
/**
 * output
 * [ 1, 2, 3, 4 ]
   [ 1, 2, 3, 4 ] [ 4, 3, 2, 1 ]
 */
