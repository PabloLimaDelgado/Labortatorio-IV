

/*Crear un archivo llamado contactos.json con el siguiente contenido inicial:

json
Copiar
Editar
[
    {
        "nombre": "Juan Pérez",
        "telefono": "123-456-7890",
        "email": "juan@example.com"
    }
]
Crear una función en Node.js que agregue un nuevo contacto al archivo contactos.json. El contacto debe ser un objeto con los siguientes campos:

json
Copiar
Editar
{
    "nombre": "[Tu Nombre]",
    "telefono": "[Tu Teléfono]",
    "email": "[Tu Email]"
}
crear una funcion para Leer y mostrar en la consola todos los contactos almacenados en contactos.json.

Agregar una función que elimine un contacto dado su nombre.

// Código de prueba
agregarContacto('Carlos López', '987-654-3210', 'carlos@example.com');
mostrarContactos();
eliminarContacto('Juan Pérez'); */

const fs = require("fs");

const agregarContactos = (nombre, numero, mails) => {
  fs.readFile("./Archivos/datos.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    let json = JSON.parse(data);

    let nuevoObjeto = {
      nombre: nombre,
      telefono: numero,
      email: mails,
    };
    json.push(nuevoObjeto);

    fs.writeFile(
      "./Archivos/datos.json",
      JSON.stringify(json, null, 2),
      (err) => {
        if (err) {
          console.error("Error al escribir el archivo:", err);
          return;
        }
        console.log("Datos guardados exitosamente.");
      }
    );
  });
};

const mostrarContactos = () => {
  fs.readFile("./Archivos/datos.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
    } else {
      let json = JSON.parse(data);
      console.log("Contenido del archivo:");
      console.log(json);
    }
  });
};

const eliminarContactos = (nombre) => {
  fs.readFile("./Archivos/datos.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    let json = JSON.parse(data);

    // Filtramos los contactos eliminando el que coincida con el nombre
    let jsonFiltrado = json.filter((contacto) => contacto.nombre !== nombre);

    fs.writeFile(
      "./Archivos/datos.json",
      JSON.stringify(jsonFiltrado, null, 2),
      (err) => {
        if (err) {
          console.error("Error al escribir el archivo:", err);
          return;
        }
        console.log(`Contacto '${nombre}' eliminado exitosamente.`);
      }
    );
  });
};

//agregarContactos("Pablo Lima", "2616524414", "pablolima@gmail.com")
mostrarContactos();
//eliminarContactos("Pablo Lima");
