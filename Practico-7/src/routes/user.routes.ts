import { Router } from "express";
import {
  deleteUserController,
  getAllUsersController,
  getUserBiIdController,
  postUserController,
  updateUserController,
} from "../controllers/usuario.controller";

const routerUsuario = Router();

routerUsuario.get("", getAllUsersController);
routerUsuario.get("/:idUsuario", getUserBiIdController);
routerUsuario.post("", postUserController);
routerUsuario.put("/:idUsuario", updateUserController);
routerUsuario.delete("/:idUsuario", deleteUserController);

export default routerUsuario;
