import { useState } from "react";

export default function TaskItem({ task, deleteTask, updateTask, toggleComplete }) {
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    function handleChange(e) {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value
        });
    }

    function saveEdit() {
        updateTask(editedTask);
        setEditing(false);
    }

    return (
        <div className={`task-card ${task.priority} ${task.completed ? "completed" : ""}`}>
            {!editing ? (
                <div className="task-list-item" >
                    <input 
                    type="checkbox"
                    className="complete-checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    />

                    <div className="task-info">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        {task.dueDate && (
                            <small>📅 {task.dueDate}</small>
                        )}
                    </div>
                    
                    {!task.completed && (
                    <div className="task-actions hover-actions edit-btn">
                        <button onClick={() => setEditing(true)}>✏️</button>
                    </div>
                    )}
                </div>
            ) : (
                <div className="task-list-item">
                <div className="task-item">
                    <input
                        name="title"
                        value={editedTask.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        value={editedTask.description}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={editedTask.dueDate}
                        onChange={handleChange}
                    />
                    <select
                        name="priority"
                        value={editedTask.priority}
                        onChange={handleChange}
                    >
                        <option value="low">🟢 Low</option>
                        <option value="medium">🟡 Medium</option>
                        <option value="high">🔴 High</option>
                    </select>

                </div>
                <div className="task-actions">
                        <button onClick={saveEdit}>💾 Save</button>
                        <button className="danger" onClick={() => deleteTask(task.id)}>🗑 Delete</button>
                </div>
                </div>
            )}
        </div>
    );
}