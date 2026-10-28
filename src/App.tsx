import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";
import TaskFilter from "./components/TaskFilter/TaskFilter";

export const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    status: "pending",
    priority: "low",
    dueDate: "2023-12-31",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
    priority: "medium",
    dueDate: "2024-01-01",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description 3",
    status: "completed",
    priority: "high",
    dueDate: "2024-01-02",
  },
  {
    id: "4",
    title: "Task 4",
    description: "Description 4",
    status: "pending",
    priority: "medium",
    dueDate: "2024-01-03",
  },
];

function App() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [status, setStatus] = useState<TaskStatus>();
  const [priority, setPriority] = useState<Task["priority"]>();

  function handleStatusChange(id: string, status: TaskStatus) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  }

  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function handleFilterChange(changes: {
    status?: TaskStatus;
    priority?: Task["priority"];
  }) {
    if ("status" in changes) setStatus(changes.status);
    if ("priority" in changes) setPriority(changes.priority);
  }

  function getVisibleTasks() {
    return tasks.filter(
      (task) =>
        (!status || task.status === status) &&
        (!priority || task.priority === priority),
    );
  }

  return (
    <div>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={getVisibleTasks()}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
