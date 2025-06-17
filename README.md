# Mini Task Manager - Backend

This is a **Node.js + Express** backend for a task management app. It uses an in-memory array as a mock database and follows a modular **MVC folder structure** for clarity and future extensibility.

---

## Tech Stack

- Node.js  
- Express  
- CORS

---

## Folder Structure

```
backend/
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── index.js
└── package.json
```

---

## Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. The server will run at:
   ```
   http://localhost:5000
   ```

---

## API Endpoints

### GET `/tasks`
Returns all tasks.

---

### GET `/tasks/:id`
Returns a task by its ID.

---

### POST `/tasks`
Creates a new task.  
Request Body:
```json
{
  "title": "Example Task",
  "status": "pending"
}
```

---

### PUT `/tasks/:id`
Updates an existing task.  
Request Body:
```json
{
  "title": "Updated Title",
  "status": "done"
}
```

---

### DELETE `/tasks/:id`
Deletes a task.  
Returns: `204 No Content`

---

## Frontend Setup

If your frontend is in a sibling folder named `frontend`:

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
