/*====== EJERCICIO 1 =====*/

/*Escribir en el archivo un mensaje de inicio cada vez que el programa se ejecuta, con la fecha y hora actual en el formato:

[YYYY-MM-DD HH:MM:SS] - Inicio del programa
Simular la ejecución de una tarea que tarda 5 segundos. Mientras la tarea se ejecuta, escribir en log.txt:

[YYYY-MM-DD HH:MM:SS] - Ejecutando tarea...
Cuando la tarea finaliza, escribir en log.txt:

[YYYY-MM-DD HH:MM:SS] - Tarea completada*/

/*===HECHO POR MI===*/

const fs = require("fs");
let fecha = new Date();
let fechaActual = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

fs.writeFile(
  "./Archivos/archivo1.txt",
  `[${fechaActual}] - Inicio del programa \n`,
  (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
    } else {
      console.log("Archivo guardado exitosamente");
    }
  }
);

fs.appendFile(
  "./Archivos/archivo1.txt",
  `[${fechaActual}] - Ejecutando tarea \n`,
  (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
    } else {
      console.log("Archivo guardado exitosamente");
    }
  }
);

setTimeout(() => {
  fecha = new Date();
  fechaActual = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
  fs.appendFileSync(
    "./Archivos/archivo1.txt",
    `[${fechaActual}] - Tarea completada \n`,
    (err) => {
      if (err) {
        console.error("Error al escribir el archivo:", err);
      } else {
        console.log("Archivo guardado exitosamente");
      }
    }
  );
}, "5000");

/*===HECHO POR CHAT GPT===*/

/*const fs = require("fs");
const path = require("path");

// Función para obtener la fecha y hora actual en el formato [YYYY-MM-DD HH:MM:SS]
const obtenerFechaHora = () => {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Mes comienza en 0
  const dia = String(fecha.getDate()).padStart(2, "0");
  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  const segundos = String(fecha.getSeconds()).padStart(2, "0");

  return `[${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}]`;
};

// Ruta del archivo log
const rutaArchivo = path.join(__dirname, "log.txt");

// Escribir el mensaje de inicio
const mensajeInicio = `${obtenerFechaHora()} - Inicio del programa\n`;
fs.appendFile(rutaArchivo, mensajeInicio, (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("Inicio del programa registrado en log.txt");
  }
});

// Simular la ejecución de una tarea de 5 segundos
const mensajeEjecucion = `${obtenerFechaHora()} - Ejecutando tarea...\n`;
fs.appendFile(rutaArchivo, mensajeEjecucion, (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("Ejecución de tarea registrada en log.txt");
  }
});

// Después de 5 segundos, escribir que la tarea fue completada
setTimeout(() => {
  const mensajeCompletado = `${obtenerFechaHora()} - Tarea completada\n`;
  fs.appendFile(rutaArchivo, mensajeCompletado, (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
    } else {
      console.log("Tarea completada registrada en log.txt");
    }
  });
}, 5000);*/
