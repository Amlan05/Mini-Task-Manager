'use client';
import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../lib/api';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      alert('Failed to fetch tasks.');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddOrUpdate = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, taskData);
        setEditingTask(null);
      } else {
        await createTask(taskData);
      }
      loadTasks();
    } catch {
      alert('Error saving task');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch {
      alert('Error deleting task');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <main className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Mini Task Manager</h1>
        <TaskForm onSubmit={handleAddOrUpdate} editingTask={editingTask} />
        {loading ? (
          <p className="text-center text-gray-500">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={(task) => setEditingTask(task)}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}
