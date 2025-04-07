/*3. Implementa un comando que lea un archivo JSON y muestre su contenido en la terminal.*/

const fs = require("fs");
const yargs = require("yargs");

yargs.command({
  command: "leer",
  describe: "Lee un archivo JSON y muestra su contenido",
  builder: {
    archivo: {
      describe: "./libros.json",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    fs.readFile(argv.archivo, "utf-8", (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err.message);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        console.log("Contenido del archivo JSON:", jsonData);
      } catch (error) {
        console.error("El archivo no contiene un JSON válido:", error.message);
      }
    });
  },
});

yargs.parse();
