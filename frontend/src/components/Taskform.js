'use client';
import { useState, useEffect } from 'react';

export default function TaskForm({ onSubmit, editingTask }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setStatus(editingTask.status);
    } else {
      setTitle('');
      setStatus('pending');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, status });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        value={title}
        placeholder="Enter task title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <button
        type="submit"
        className={`w-full px-4 py-2 rounded-md text-white ${
          editingTask ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'
        } transition`}
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}
