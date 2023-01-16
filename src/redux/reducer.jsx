import { statusFilters } from "./constants";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

// Використовуємо initialState як значення стану за умовчанням
export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    case 'tasks/addTask': {
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        }

    }
    case 'tasks/deleteTask': {
        return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload),
        }

    }
    case "tasks/toggleCompleted":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
      case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    // Залежно від типу екшену виконуватиметься різна логіка
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};