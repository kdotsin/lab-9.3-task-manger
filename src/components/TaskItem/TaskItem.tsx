import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  const priorityStyles = {
    low: "text-green-600",
    medium: "text-amber-600",
    high: "text-red-600",
  };

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "text-blue-700",
    completed: "text-green-700",
  };
  return (
    <div className="flex justify-between rounded-xl border border-slate-700 bg-white p-4 shadow-sm">
      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-slate-700">{task.title}</h2>
        <p className="text-slate-500">{task.description}</p>
        <div className="mt-2 flex gap-3 text-sm">
          <span className={priorityStyles[task.priority]}>
            Priority: {task.priority}
          </span>
          <span className="text-slate-500">Due: {task.dueDate}</span>
        </div>
      </section>

      <section className="flex items-start justify-end gap-5">
        <select
          name="task-status"
          id="task-dropdown"
          className={`rounded px-3 py-1 ${statusStyles[task.status]}`}
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button
          className="px-1 py-1 text-red-500 hover:text-red-700"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </section>
    </div>
  );
}
