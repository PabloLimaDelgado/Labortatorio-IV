import dotenv from "dotenv";
import express from "express";
import routerUsuario from "./routes/user.routes";
dotenv.config();

const app = express();

app.use(express.json());

//Routes
app.use("/user", routerUsuario)

export default app;
