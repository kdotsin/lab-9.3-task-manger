import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  return (
    <div>
        {tasks.map((task) => 
            <TaskItem 
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
            />
        )}
    </div>
  )
}
