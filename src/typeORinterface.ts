// une Interface ne peut pas définir un type
// Avec les type on peut faire
type DatesString = string;
// alors qu'une interface défini uniquement un object

// Ensuite, une interface reste ouverte et peut etre mergée avec d'autre :
interface Point {
  x: number;
}
interface Point {
  y: number;
}
const AA: Point = {
  x: 2,
  y: 6,
};
// un type ne peut pas etre défini plusieurs fois (fermé)

// une interface peut etre implémentée
class TwoDPoint implements Point {
  // Du coup, pour satisfaite l'implémentation, on doit définir les property x et y de l'interface Point
  x = 0;
  y = 0;
}
// cela ressemble aux classes abstraite, mais les interface ne vont rine générer dans le fichier de sortie '.js'
