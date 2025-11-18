import { useState } from "react";

export default function Taskform({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      text: task,
      priority,
      category,
      completed: false,
    });

    // Reset fields
    setTask("");
    setPriority("medium");
    setCategory("general");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </div>

      <div>
        {/* Priority Dropdown */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>

      <h1>
        {task} {priority} {category}
      </h1>
    </form>
  );
}
