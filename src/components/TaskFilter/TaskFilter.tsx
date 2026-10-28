import type { Task, TaskFilterProps, TaskStatus } from "../../types";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="status-filter" className="text-sm font-medium text-slate-700">
          Status
        </label>
        <select
          id="status-filter"
          onChange={(e) =>
            onFilterChange({
              status: (e.target.value || undefined) as TaskStatus | undefined,
            })
          }
          className="rounded-md bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="priority-filter" className="text-sm font-medium text-slate-700">
          Priority
        </label>
        <select
          id="priority-filter"
          onChange={(e) =>
            onFilterChange({
              priority: (e.target.value || undefined) as Task["priority"] | undefined,
            })
          }
          className="rounded-md bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}