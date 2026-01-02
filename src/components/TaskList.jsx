import TaskItem from "./TaskItem";

export default function TaskList({tasks, deleteTask, updateTask, toggleComplete}) {
    if(tasks.length === 0) {
        return <p className="empty">No tasks yet.</p>;
    }

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} toggleComplete={toggleComplete}/>
            ))}
        </div>
    );
}