const Task = require('../models/taskModel');

exports.getTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

exports.getTask = (req, res) => {
  const task = Task.getTaskById(parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

exports.createTask = (req, res) => {
  const { title, status } = req.body;
  if (!title || !status) return res.status(400).json({ error: 'Invalid input' });
  const newTask = Task.createTask({ title, status });
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const updated = Task.updateTask(parseInt(req.params.id), req.body);
  if (!updated) return res.status(404).json({ error: 'Task not found' });
  res.json(updated);
};

exports.deleteTask = (req, res) => {
  const deleted = Task.deleteTask(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
};
