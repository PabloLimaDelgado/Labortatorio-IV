import { sprintModel } from "../models/Sprint.model.js";
import { deleteTask, getTaskById, putTask } from "./taskController.js";

export const getAllSprint = async () => {
  try {
    const sprints = await sprintModel.find();
    return sprints;
  } catch (error) {
    console.log(error);
  }
};

export const getSprintById = async (idSprint) => {
  try {
    const sprintById = await sprintModel.findById(idSprint).populate("tareas");
    return sprintById;
  } catch (error) {
    console.log(error);
  }
};

export const postSprints = async (sprint) => {
  try {
    const sprintCreado = await sprintModel.create(sprint);
    return sprintCreado;
  } catch (error) {
    console.log(error);
  }
};

export const putSprint = async (idSprint, sprint) => {
  try {
    await sprintModel.updateOne({ _id: idSprint }, { $set: sprint });
    return getSprintById(idSprint);
  } catch (error) {
    console.log(error);
  }
};

export const deleteSprint = async (idSprint) => {
  try {
    const sprintEliminado = await sprintModel.deleteOne({ _id: idSprint });
    return sprintEliminado;
  } catch (error) {
    console.log(error);
  }
};

export const putSprintAddTarea = async (idSprint, idTask) => {
  try {
    const tarea = await getTaskById(idTask);
    const sprint = await sprintModel.findById(idSprint);

    tarea.asignada = true;
    await tarea.save();

    sprint.tareas.push(tarea._id);
    await sprint.save();

    return getSprintById(idSprint);
  } catch (error) {
    console.log(error);
  }
};

export const getTareaBySprintId = async (idSprint) => {
  try {
    const sprint = await sprintModel.findById(idSprint).populate("tareas");
    return sprint.tareas;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTareaFromSprint = async (idSprint, idTask) => {
  try {
    const sprint = await sprintModel.findById(idSprint);

    sprint.tareas = sprint.tareas.filter(
      (tareaId) => tareaId.toString() !== idTask
    );
    await deleteTask(idTask);
    await sprint.save();

    return await getSprintById(idSprint);
  } catch (error) {
    console.log(error);
  }
};

export const removeTareaFromSprint = async (idSprint, idTask) => {
  try {
    const sprint = await sprintModel.findById(idSprint);

    sprint.tareas = sprint.tareas.filter(
      (tareaId) => tareaId.toString() !== idTask
    );

    const tarea = await getTaskById(idTask);
    tarea.asignada = false;
    await putTask(idTask, tarea);
    await sprint.save();
  } catch (error) {
    console.log(error);
  }
};
