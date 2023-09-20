import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });

    res.json(tasks);
  } catch (error) {
    console.log(req.user);
    res.status(500).json({ message: "error ", error: error.message });
  }
};
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  console.log(req.user);
  const newTask = new Task({ title, description, date, user: req.user.id });
  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error created task", error: error.message });
  }
};
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
