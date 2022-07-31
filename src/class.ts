// Le keyword 'private' devant une property d'une class, permet de rendre cette property uniquement accessible à l'intérieur de la classe
class A {
  private a = 3;
  protected b = 5;
  #c = 55;
  log() {
    console.log(this.a, this.#c);
  }
}

const aInstance = new A();
// la ligne de code ci-dessous génère une erreur TS
// La propriété 'a' est privée et uniquement accessible dans la classe 'A'.
// La propriété 'b' est protégée et uniquement accessible dans la classe 'A' et ses sous-classes.
// console.log(aInstance.a)
// console.log(aInstance.b)
aInstance.log();

class B extends A {
  log() {
    console.log(this.b);
  }
}
const bInstance = new B();
bInstance.log();
// les propriétés public n'ont pas de restriction d'accès

// /!\ les restrictions d'accès le sont juste au niveau du code TS
// En regardant le .js compilé, les notions de private, protected ou public disparaissent
// De Plus, une property 'private' peut quand même etre accessible par l'écriture via les key
// ainsi :
// console.log(aInstance.a); // générere une erreur TS, MAIS
console.log(aInstance['a']); // ceci fonctionne

// Pour rendre une property REELEMENT private, il faut utiliser le décorateur #
// console.log(aInstance['#c']); // ceci génère une erreur d'inaccessibilité

class Collection<T> {
  constructor(private items: T[]) {}
  first(): T | null {
    return this.items[0] || null;
  }
  add(item: T): this {
    this.items.push(item);
    return this;
  }
}
const col = new Collection([1, 6]);
const r = col.first();
const r2 = col.add(6);

class Subscriber {
  on(this: HTMLInputElement, name: string) {
    // ceci permet d'utiliser this autrement, sans qu'il soit l'instance de la classe
  }
}

// ---------------- Class Abstraite
// elles permettent de préparer un modele de class pour concrétiser d'autres class
abstract class Geometry {
  x = 0;
  y = 0;
  abstract surface(): number;
}
class Triangle extends Geometry {
  x = 2;
  y = 2;
  surface() {
    return 3;
  }
}
