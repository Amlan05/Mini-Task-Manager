let tasks = [];
let nextId = 1;

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find(t => t.id === id);
}

function createTask({ title, status }) {
  const newTask = {
    id: nextId++,
    title,
    status,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, { title, status }) {
  const task = getTaskById(id);
  if (!task) return null;
  task.title = title ?? task.title;
  task.status = status ?? task.status;
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
