// ATTENTION, les décorateurs sont à l'état expérimentale dans JS
// TS le permet mais devra s'adapter en fonction des décision pour JS
// Du coup, pour les utiliser il faut lui dire dans le tsconfig, key "experimentalDecorators"

//usecase
// sur une class User, on veut restreindre l'age entre 0 et 100
// Il faut donc écrire une fonction du meme nom que le nom choisi pour le décorateur

function limite({ min, max }: { min: number; max: number }) {
  return function <T>(target: T, key: keyof T) {
    let val = target[key] as any;
    const setter = (v: unknown) => {
      if (typeof v === 'number' && v > min && v < max) {
        val = v;
        return;
      }
      throw new Error(`nom entre ${min} et ${max} attendu !`);
    };
    const getter = () => val;
    Object.defineProperty(target, key, {
      set: setter,
      get: getter,
    });
  };
}

class UserDecor {
  @limite({
    min: 0,
    max: 100,
  })
  age: number = 0;

  taille: number = 60;
}

const u = new UserDecor();
u.age = 20;
