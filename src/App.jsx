import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import TodoApp from "./components/TodoApp";

function App() {
  
  const [showLanding, setShowLanding] = useState(true);
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created");

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const getVisibleTasks = () => {
    let filteredTasks = [...tasks];

    if(filter === "completed"){
      filteredTasks = filteredTasks.filter(t => t.completed);
    }

    if(filter === "pending") {
      filteredTasks = filteredTasks.filter(t => !t.completed);
    }
    
    if(filter === "high"){
      filteredTasks = filteredTasks.filter(t => t.priority === "high");
    }

    if(filter === "medium"){
      filteredTasks = filteredTasks.filter(t => t.priority === "medium");
    }

    if(filter === "low"){
      filteredTasks = filteredTasks.filter(t => t.priority === "low");
    }

    if(sortBy === "date"){
      filteredTasks.sort(
        (a,b) => new Date(a.dueDate || Infinity) - new Date(b.dueDate || Infinity)
      );
    }

    if(sortBy === "priority"){
      const priorityOrder = {high: 1, medium: 2, low: 3};
      filteredTasks.sort(
        (a,b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    }

    if(sortBy === "created"){
      filteredTasks.sort((a,b) => b.id - a.id);
    }
    return filteredTasks
  }

  return (
    <>
    {showLanding ? (
      <Landing onStart={() => setShowLanding(false)} />
    ) : (
      <TodoApp
      tasks={getVisibleTasks()}
      addTask={addTask}
      deleteTask={deleteTask}
      updateTask={updateTask}
      toggleComplete={toggleComplete}
      setFilter={setFilter}
      setSortBy={setSortBy}
      goHome={() => setShowLanding(true)}
    />
    )}
    </>
  );
}

export default App;
