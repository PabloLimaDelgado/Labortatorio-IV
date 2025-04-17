import { Router } from "express";
import {
  deleteTask,
  getAllTask,
  getTaskById,
  postTask,
  putTask,
} from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.get("/", async (req, res) => {
  const response = await getAllTask(req.query);
  res.json(response);
});

taskRouter.get("/:idTask", async (req, res) => {
  const { idTask } = req.params;
  const response = await getTaskById(idTask);
  res.json(response);
});

taskRouter.post("/", async (req, res) => {
  const response = await postTask(req.body);
  res.json(response);
});

taskRouter.put("/:idTask", async (req, res) => {
  const { idTask } = req.params;
  const response = await putTask(idTask, req.body);
  res.json(response);
});

taskRouter.delete("/:idTask", async (req, res) => {
  const { idTask } = req.params;
  const response = await deleteTask(idTask);
  res.json(response);
});

export default taskRouter;
