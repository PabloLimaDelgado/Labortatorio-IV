/*
1. Agrega otro comando a Yargs llamado despedir que muestre "Adiós, [nombre]!".
4. Modifica el script para que, si el usuario no proporciona el argumento nombre, se muestre un mensaje de error adecuado.
 */

const yargs = require("yargs");
const argv = yargs
  .command("saludar", "adios", {
    nombre: {
      describe: "Nombre de la persona",
      type: "string",
    },
  })
  .help().argv;

if (argv._.includes("saludar")) {

  if(argv.nombre){
    console.log(`Hola, ${argv.nombre}!`);
  } else{
    console.log("No hay nombre");
    
  }
}

if (argv._.includes("adios")) {
  console.log(`Adios, ${argv.nombre}!`);
}
