// le type unknow permet de préparer une fonction à l'avance par example, puis utiliser le narrowing après pour réduire la voilure
function a_unknown(arg: unknown) {
  // tant que le narrowing n'a pas réduit, on ne peut pas utiliser l'arg
  if (arg instanceof String) arg.toLocaleLowerCase();
}

// as const va permettre de rendre readonly des property avec des types literals
const tt = { isPrivate: true, isPublic: false };
// ici tt est de type
// {
//     isPrivate: boolean;
//     isPublic: boolean;
// }
// si on fait ceci :
const tt2 = { isPrivate: true as true, isPublic: false };
// on a
// tt2: {
//   isPrivate: true;
//   isPublic: boolean;
// }

// Et enfin
const tt3 = { isPrivate: true, isPublic: false } as const;
// tt3: {
//     readonly isPrivate: true;
//     readonly isPublic: false;
// }

// et Ainsi
const tlp: [string, number] = ['tomate', 2];
// ci dessus on est sur un type Tulpe, qui est différent de
const autre: (string | number)[] = ['tomate', 2];
// on ne pourra pas ajouter un élément dans le tuple On est sur une dimension définie

// -------------- Enum
// permet de nommer des états

enum STEPS {
  Intro,
  Selection,
  Panier,
  Paiement,
}
const step: STEPS = STEPS.Intro;
console.log(STEPS[step]);
