import { useState } from "react";

export default function TaskForm({addTask}) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "medium",
        completed: false
    });

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(!form.title.trim()) return;

        addTask({
            id: Date.now(),
            ...form
        });
        
        setForm({ 
            title: "",
            description: "",
            dueDate: "",
            priority: "medium",
            completed: false
        });
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h3>Add Task</h3>
            <input 
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            />
            <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            />
            <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            />
            <select 
            name="priority"
            value={form.priority}
            onChange={handleChange}
            >
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
            </select>
            <button>Add Task</button>
        </form>
    );
}