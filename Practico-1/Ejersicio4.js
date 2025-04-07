/*====== EJERCICIO 3 =====*/

/*Desarrollar un programa en Node.js que:
1.	Reciba como argumento el nombre de un archivo de texto.
2.	Lea el contenido del archivo y cuente cuántas veces aparece una palabra específica (también pasada como argumento).
3.	Imprima en consola el número de apariciones de la palabra.
Ejemplo de uso:
node contadorPalabras.js archivo.txt palabras


archivo.txt
Hola mundo, este es un ejemplo de conteo de palabras en un archivo.
Este archivo contiene palabras repetidas. Palabras, palabras y más palabras.


Salida esperada (si la palabra aparece 3 veces en el archivo):
La palabra "palabras" aparece 5 veces en el archivo "archivo.txt". */

/*===HECHO POR MI===*/
/*const fs = require("fs");

//const [, , nombre = "archivo4"] = process.argv;

const contadorPalabras = (palabra) => {
  fs.readFile(`./Archivos/${palabra}.txt`, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
    }

    const arrayList = data.split(" ");

    let numero = 0;

    for (let index = 0; index <= arrayList.length; index++) {
      if (arrayList[index] === "normal") {
        numero += 1;
      }
    }

    console.log(numero);
  });
};

contadorPalabras("archivo4");*/

/*===HECHO POR CHATGPT===*/
const fs = require("fs");

const [, , archivo = "./Archivos/archivo4.txt", palabra = "lorem"] = process.argv;

if (!archivo || !palabra) {
  console.error("Uso: node contadorPalabras.js <archivo> <palabra>");
  process.exit(1);
}

fs.readFile(archivo, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err.message);
    process.exit(1);
  }

  // Normalizamos el texto a minúsculas y eliminamos signos de puntuación
  const textoLimpio = data.toLowerCase().replace(/[.,;:!?()"]/g, " ");
  const palabras = textoLimpio.split(/\s+/); // Dividimos por espacios

  // Contamos cuántas veces aparece la palabra
  const ocurrencias = palabras.filter(
    (word) => word === palabra.toLowerCase()
  ).length;

  console.log(
    `La palabra "${palabra}" aparece ${ocurrencias} veces en el archivo "${archivo}".`
  );
});
