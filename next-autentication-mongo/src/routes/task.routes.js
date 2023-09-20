import { Router } from "express";
import { authRequired } from "../middlewares/validatetoken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, createTask);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
