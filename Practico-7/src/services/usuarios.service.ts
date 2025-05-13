import { IUser } from "../types/IUser.interface";
import prisma from "../models/user.model";

export const getAllUsersService = async () => {
  return await prisma.findMany({
    select: {
      id: true,
      email: true,
      nombre: true,
      password: true,
    },
  });
};

export const getUserByIdService = async (id: string) => {
  return await prisma.findUnique({
    where: { id: id },
    select: {
      id: true,
      email: true,
      nombre: true,
      password: true,
    },
  });
};

export const postUserService = async (user: IUser) => {
  return await prisma.create({
    data: {
      nombre: user.nombre,
      email: user.email,
      password: user.password,
    },
  });
};

export const updateUserService = async (id: string, user: IUser) => {
  return await prisma.update({
    where: { id: id },
    data: {
      nombre: user.nombre,
      email: user.email,
      password: user.password,
    },
  });
};

export const deleteUserService = async (id: string) => {
  return await prisma.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      nombre: true,
      password: true,
    },
  });
};
