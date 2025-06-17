# Mini Task Manager - Backend

This is a Node.js + Express backend for a task management app. It uses an in-memory array as a mock database and follows a modular MVC folder structure.

## Stack
- Node.js
- Express
- CORS

## Folder Structure

backend/
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── index.js
└── package.json

## Backend Setup

1. Navigate to the backend folder:
   cd backend

2. Install dependencies:
   npm install

3. Start the server:
   node index.js

The API runs on: http://localhost:5000

## API Endpoints

### GET /tasks
Returns all tasks.

### GET /tasks/:id
Returns task by ID.

### POST /tasks
Create a task.
Body:
{
  "title": "Example Task",
  "status": "pending"
}

### PUT /tasks/:id
Update a task.
Body:
{
  "title": "Updated Title",
  "status": "done"
}

### DELETE /tasks/:id
Deletes a task.


## Frontend Setup
cd frontend
npm install
npm run dev
