/*2. Crea un script con Yargs que permita sumar dos números desde la línea de comandos. (n1 y n2)*/

const yargs = require("yargs");

const argv = yargs
  .option("numero1", {
    alias: "n1",
    type: "number",
    describe: "Primer número para la suma",
    demandOption: true, 
  })
  .option("numero2", {
    alias: "n2",
    type: "number",
    describe: "Segundo número para la suma",
    demandOption: true,
  }).argv;

console.log(`La suma de los números es: ${argv.numero1 + argv.numero2}`);
