import { taskModel } from "../models/Task.model.js";

export const getAllTask = async () => {
  try {
    const tareas = await taskModel.find();
    return tareas;
  } catch (error) {
    console.log(error);
  }
};

export const getTaskById = async (idTarea) => {
  try {
    const tareaById = await taskModel.findById(idTarea);
    return tareaById;
  } catch (error) {
    console.log(error);
  }
};

export const postTask = async (tarea) => {
  try {
    const tareaCreada = await taskModel.create(tarea);
    return tareaCreada;
  } catch (error) {
    console.log(error);
  }
};

export const putTask = async (idTarea, tarea) => {
  try {
    await taskModel.updateOne({ _id: idTarea }, { $set: tarea });
    return getTaskById(idTarea);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (idTarea) => {
  try {
    const tarea = await getTaskById(idTarea);
    if (tarea.asignada === false) {
      const tareaEliminada = await taskModel.deleteOne({ _id: idTarea });
      return tareaEliminada;
    }
  } catch (error) {
    console.log(error);
  }
};
