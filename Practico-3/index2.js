import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu nombre? ", (nombre) => {
    console.log(`Hola, ${nombre}!`);
  
    rl.question("¿Cuántos años tienes? ", (años) => {
      const añoNacimiento = new Date().getFullYear() - parseInt(años);
      console.log(`Usted nació en: ${añoNacimiento}`);
      
      rl.close();
    });
  });
