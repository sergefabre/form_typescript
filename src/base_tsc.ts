/**
 * Une fois le fichier tsconfig.json initié par tsc --init
 * on configure :
 * outDir et routDir
 * on peut alors lancer la compilation juste par la commande "tsc"
 */

// Assertion de Type, pour forcer un type :
const compteur1 = document.querySelector('#compteur');
const compteur2 = document.querySelector('#compteur') as HTMLInputElement;
const compteur3 = <HTMLInputElement>document.querySelector('#compteur');

// Union de type et réduction du type
// compteur1.addEventListener('click', `myFunc`)
// compteur peut ếtre null
// du coup on peu pallier cette erreur typeScript de 2 façons :
const myFunc = () => {};
compteur1?.addEventListener('click', myFunc);
// le ? permet de dire à TS d'appliquer le addEventListener sur compteur SI IL Existe
// Autre solution : avec un if, on rassure TS sur l'existance de "compteur1" :
if (compteur1) compteur1.addEventListener('click', myFunc);

/**
 * le processus qui réduit le type lors d'une union de type s'appel le Narrowing
 * un exemple avec le if ci dessus
 * cela peut se faire aussi par un "if typeof"
 * dans l'exemple ci-dessous, avec le premier if on sait que, id est de type Number,
 * il est string dans le else
 * */
function printId(id: string | number) {
  if (typeof id === 'number') console.log((id * 3).toString());
  else console.log(id.toLocaleUpperCase());
}

// on peut également "forcer" le narrowing avec le "!". Mais méthode risquée.....
compteur1!.innerHTML = 'tt';

// possible également par instanceof qui donne l'instance origine de la property
function example(a: string | Date) {
  if (a instanceof Date) console.log(a.toISOString());
  else console.log(a.toLocaleUpperCase());
}

// avec un tablea
function ex2(param: string | string[]) {
  if (Array.isArray(param)) console.log('param est un tableau de string');
  else console.log('param est une string');
}

// avec le in operator
function ex3(param: MouseEvent | HTMLInputElement) {
  if ('value' in param) {
    // comme seule le type HTMLInputElement comporte une property "value",
    // a ce niveau TS sait que a est de type HTMLInputElement
  }
  // et si on teste sur une property qui n'existe pas, param aura le type "never"
}
