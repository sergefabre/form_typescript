console.log('la commande "npx" permet d\'aller chercher les outils (tsc dans notre cas) dans node_modules !');
console.info('du coup on peut exécuter "npx tsc app.ts"');

const double = (input: number) => console.info(`le double de ${input} est ${input * 2}`);
double(8);
