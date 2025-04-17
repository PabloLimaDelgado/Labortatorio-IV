import { backlogModel } from "../models/Backlog.model.js";
import { getTaskById } from "./taskController.js";

export const getAllBacklog = async (idBacklog) => {
  try {
    const backlog = await backlogModel.findById(idBacklog);
    return backlog;
  } catch (error) {
    console.log(error);
  }
};

export const postBacklog = async (backlog) => {
  try {
    const backlogCreado = await backlogModel.create(backlog);
    return backlogCreado;
  } catch (error) {
    console.log(error);
  }
};

export const putBacklogAddTarea = async (idBacklog, idTask) => {
  try {
    const tarea = await getTaskById(idTask);
    const backlog = await backlogModel.findById(idBacklog);

    if (tarea.asignada === false) {
      backlog.tareas.push(tarea);
      await backlog.save();
    }

    return getAllBacklog(idBacklog);
  } catch (error) {
    console.log(error);
  }
};
