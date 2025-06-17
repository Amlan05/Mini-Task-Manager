'use client';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks.length) return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-4"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
            <p className="text-sm text-gray-500">
              Status: <span className="capitalize">{task.status}</span> |{' '}
              {new Date(task.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="flex mt-2 md:mt-0 space-x-2">
            <button
              onClick={() => onEdit(task)}
              className="px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white text-sm transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
