import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import backlogRouter from "./routes/backlog.routes.js";
import { swaggerUi, swaggerSpecs } from "./docs/swagger.js";

import taskRouter from "./routes/task.routes.js";
import sprintRouter from "./routes/sprints.routes.js";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware para parsear JSON
app.use(express.json());

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Rutas
app.use("/tareas", taskRouter);
app.use("/sprints", sprintRouter);
app.use("/backlog", backlogRouter);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
  .then(() => {
    console.log("Conectado a MongoDB");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error al conectar a MongoDB:", error.message);
  });
