import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";

export default function TodoApp({ tasks, addTask, deleteTask, updateTask, toggleComplete, setFilter, setSortBy, goHome }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="todo-layout">
      {/* Left panel */}
      <div className="left-panel">
        <div className="todo-header">
          <h1>My Tasks</h1>
          <button className="home-btn" onClick={goHome}>🏠 Home</button>
        </div>
        <FilterBar setFilter={setFilter} setSortBy={setSortBy} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} toggleComplete={toggleComplete} />
      </div>
      {/* Right panel */}
      <div className={`right-panel ${showForm ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? ">" : "+"}
        </button>
        {showForm && <TaskForm addTask={addTask} />}
      </div>
    </div>
  );
}
