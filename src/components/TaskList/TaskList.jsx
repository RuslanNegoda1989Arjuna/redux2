import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    default:
      return tasks;  
  }
}

export const TaskList = () => {
  return (
    <ul className={css.list}>
      {[].map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
