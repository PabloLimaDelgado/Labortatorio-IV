import { Router } from "express";
import {
  getAllBacklog,
  postBacklog,
  putBacklogAddTarea,
} from "../controllers/backlogController.js";

const backlogRouter = Router();

backlogRouter.get("/:idBacklog", async (req, res) => {
  const { idBacklog } = req.params;
  const response = await getAllBacklog(idBacklog);
  res.json(response);
});

backlogRouter.post("/", async (req, res) => {
  const response = await postBacklog(req.body);
  res.json(response);
});

backlogRouter.put("/:idBacklog/add_task/:idTask", async (req, res) => {
  const { idBacklog, idTask } = req.params;
  const response = await putBacklogAddTarea(idBacklog, idTask);
  res.json(response);
});

export default backlogRouter;
