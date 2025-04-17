import { Router } from "express";
import {
  deleteSprint,
  getAllSprint,
  getSprintById,
  postSprints,
  putSprint,
  putSprintAddTarea,
} from "../controllers/sprintController.js";

const sprintRouter = Router();

sprintRouter.get("/", async (req, res) => {
  const response = await getAllSprint(req.query);
  res.json(response);
});


sprintRouter.get("/:idSprint", async (req, res) => {
  const { idSprint } = req.params;
  const response = await getSprintById(idSprint);
  res.json(response);
});

sprintRouter.post("/", async (req, res) => {
  const response = await postSprints(req.body);
  res.json(response);
});

sprintRouter.put("/:idSprint", async (req, res) => {
  const { idSprint } = req.params;
  const response = await putSprint(idSprint, req.body);
  res.json(response);
});

sprintRouter.delete("/:idSprint", async (req, res) => {
  const { idSprint } = req.params;
  const response = await deleteSprint(idSprint);
  res.json(response);
});

sprintRouter.put("/:idSprint/add_task/:idTask", async (req, res) => {
  const { idSprint, idTask } = req.params;
  const response = await putSprintAddTarea(idSprint, idTask);
  res.json(response);
});

export default sprintRouter;
