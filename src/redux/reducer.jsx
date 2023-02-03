import { addTask, deleteTask, setStatusFilter, toggleCompleted } from "./actions";
import { statusFilters } from "./constants";
// Імпортуємо функцію композиції редюсерів
// import { combineReducers } from "redux";


const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
export const tasksReducer = createReduser(tasksInitialState, {
  [addTask]: (state, action) =>{
    state.push(action.payload);
  },
  [deleteTask]: (state, action) =>{
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) =>{
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
export const filtersReducer = createReduser(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  }
});
