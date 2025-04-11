const express = require("express");
const usuarioRoutes = require("./routes/UserRoutes.routes");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/usuarios", usuarioRoutes);

mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    // Iniciar el servidor sólo si la DB se conectó correctamente
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error al conectar a MongoDB:", error.message);
  });
