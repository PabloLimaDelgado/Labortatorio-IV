import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Sprint Manager",
      version: "1.0.0",
      description: "Documentación de la API para manejar Sprints y Tareas",
    },
  },
  apis: ["./src/docs/*.js"], // busca los comentarios Swagger acá
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerSpecs };
