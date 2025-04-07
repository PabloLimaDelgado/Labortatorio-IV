import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu nombre? ", (nombre) => {
  rl.question("¿Cuántos años tienes? ", (años) => {
    rl.question("¿Cual es su correo? ", (correo) => {
      const texto = `Nombre: ${nombre} \nEdad: ${años} \nCorreo: ${correo}`;

      fs.writeFileSync(`datos_usuarios.txt`, texto, "utf-8", () => {
        rl.close();
        return;
      });

      fs.readFile("datos_usuarios.txt", "utf-8", (err, data) => {
        if (err) {
          console.error("Error al leer el archivo:", err);
        } else {
          console.log("\nContenido del archivo:");
          console.log(data);
        }
        rl.close();
      });
    });
  });
});
