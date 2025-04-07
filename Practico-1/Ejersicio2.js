/*====== EJERCICIO 2 =====*/

/*
Desarrollar un programa en Node.js que realice las siguientes operaciones utilizando el módulo `fs`:

1. Crear un archivo llamado `datos.txt` y escribir en él el siguiente contenido:
   ```
   Nombre: [Tu Nombre]
   Edad: [Tu Edad]
   Carrera: [Tu Carrera]
   ```
   
2. Leer el archivo `datos.txt` e imprimir su contenido en la consola.

3. Agregar al final del archivo la fecha y hora actuales en el siguiente formato:
   ```
   Fecha de modificación: [YYYY-MM-DD HH:MM:SS]
   ```

4. Renombrar el archivo `datos.txt` a `informacion.txt`.

5. Eliminar el archivo `informacion.txt` tras 10 segundos de haber sido renombrado.
 */

const fs = require("fs");
let fecha = new Date();
let fechaActual = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

fs.writeFile(
  "./Archivos/datos.txt",
  `
    Ejercicio 2\n 
    Nombre: Pablo Lima\n
    Edad: 23\n
    Carrera: Tecnico en programación\n
    `,
  (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
    } else {
      console.log("Archivo guardado exitosamente");
    }
  }
);

fs.readFile("./Archivos/datos.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
  } else {
    console.log("Contenido del archivo:");
    console.log(data);
  }
});

fs.appendFile(
  "./Archivos/datos.txt",
  `Fecha de modificacion - [${fechaActual}] \n`,
  (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
    } else {
      console.log("Archivo guardado exitosamente");
    }
  }
);

fs.rename("./Archivos/datos.txt", "./Archivos/informacion.txt", (err) => {
  if (err) {
    console.error("Error al reescribir el archivo:", err);
  } else {
    console.log("Archivo reescrito exitosamente");
  }
});

setTimeout(() => {
  fs.unlink("./Archivos/informacion.txt", (err) => {
    if (err) {
      console.error("Error al eliminar el archivo:", err);
    } else {
      console.log("Archivo eliminado exitosamente");
    }
  });
}, "10000");
