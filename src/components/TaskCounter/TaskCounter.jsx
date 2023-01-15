import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { getTasks } from "redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const count = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc.completed += 1;
    } else {
      acc.active += 1;
    }
    console.log(acc);

    return acc
  }, {active: 0, copleted: 0})
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
