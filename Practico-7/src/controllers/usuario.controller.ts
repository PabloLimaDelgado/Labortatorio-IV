import { Request, Response } from "express";
import {
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  postUserService,
  updateUserService,
} from "../services/usuarios.service";

export const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const getUserBiIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { idUsuario } = req.params;

    const user = await getUserByIdService(idUsuario);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const postUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userCreado = await postUserService(req.body);
    res.status(200).json(userCreado);
  } catch (error) {
    console.error("Error al crear el usuario", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { idUsuario } = req.params;
    const userEditado = await updateUserService(idUsuario, req.body);
    res.status(200).json(userEditado);
  } catch (error) {
    console.error("Error al editar el usuario", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { idUsuario } = req.params;
    const userEliminado = await deleteUserService(idUsuario);
    res.status(200).json(userEliminado);
  } catch (error) {
    console.error("Error al editar el usuario", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
